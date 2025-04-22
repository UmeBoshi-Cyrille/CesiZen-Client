import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryDto } from '@models/category/category-dto';
import { CategoryQueryService } from '@services/category/category-query.service';
import { CategoryCommandService } from '@services/category/category-command.service';
import { CategoryEditDialogComponent } from '../category-edit-dialog/category-edit-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-back-category',
  imports: [MatPaginatorModule, MatTableModule, CommonModule, MatProgressSpinnerModule, MatIconModule, MatDialogModule],
  templateUrl: './back-category.component.html',
  styleUrl: './back-category.component.scss'
})
export class BackCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'update', 'delete'];
  dataSource = new MatTableDataSource<CategoryDto>();
  pageSizeOptions = [];
  pageNumber = 1;
  pageSize = 12;
  totalCount = 0;
  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private categoryQueryService: CategoryQueryService,
    private categoryCommandService: CategoryCommandService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.loadArticles();
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private loadArticles(): void {
    this.loading = true;
    this.categoryQueryService.getCategories(this.pageNumber, this.pageSize).subscribe({
      next: (response) => {
        this.dataSource.data = response.data;
        this.totalCount = response.totalCount;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    })
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
    this.loadArticles();
  }

  viewDetails(articleId: number): void {
    this.router.navigateByUrl(`back-categories/${articleId}`);
  }

  deleteCategory(articleId: number): void {
    // Confirmation dialog
    if (confirm('Delete this category permanently?')) {
      this.categoryCommandService.delete(articleId).subscribe({
        next: () => {
          // Remove from local data
          this.dataSource.data = this.dataSource.data.filter(a => a.id !== articleId);
          // Update pagination
          this.totalCount -= 1;
          // Reset paginator if needed
          if (this.dataSource.data.length === 0 && this.pageNumber > 1) {
            this.paginator.firstPage();
          }
        }
      });
    }
  }

  //updateCategory(categoryId: number): void {
  //  const dialogRef = this.dialog.open(CategoryEditDialogComponent, {
  //    width: '400px',
  //    data: { category: this.dataSource.data.find(cat => cat.id === categoryId) }
  //  });

  //  dialogRef.afterClosed().subscribe(updatedCategory => {
  //    if (updatedCategory) {
  //      const index = this.dataSource.data.findIndex(cat => cat.id === categoryId);
  //      this.dataSource.data[index] = updatedCategory;
  //      this.dataSource._updateChangeSubscription(); // Force table refresh
  //    }
  //  });
  //}

  updateCategory(categoryId: number): void {
    const category = this.dataSource.data.find(cat => cat.id === categoryId);

    const dialogRef = this.dialog.open(CategoryEditDialogComponent, {
      width: '400px',
      data: { category }
    });

    dialogRef.afterClosed().subscribe(updatedCategory => {
      if (updatedCategory) {
        const categoryDto: CategoryDto = {
          id: categoryId,
          name: updatedCategory.name,
          imagePath: updatedCategory.imagePath
        };

        this.categoryCommandService.update(categoryId, categoryDto).subscribe({
          next: () => {
            const index = this.dataSource.data.findIndex(cat => cat.id === categoryId);
            this.dataSource.data[index] = { ...this.dataSource.data[index], ...updatedCategory };
            this.dataSource.data = [...this.dataSource.data]; // Force refresh
            this.snackBar.open('Category updated', 'Close', { duration: 3000 });
          },
          error: (err) => {
            this.snackBar.open('Update failed', 'Close', { duration: 3000 });
            console.error('Update error:', err);
          }
        });
      }
    });
  }
}
