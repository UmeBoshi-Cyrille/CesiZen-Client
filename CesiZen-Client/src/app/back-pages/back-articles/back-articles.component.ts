import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleQueryService } from '@services/article/article-query.service';
import { ArticleMinimumDto } from '@models/article/article-minimum-dto';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ArticleCommandService } from '@services/article/article-command.service';

@Component({
  selector: 'app-back-articles',
  imports: [MatPaginatorModule, MatTableModule, CommonModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './back-articles.component.html',
  styleUrl: './back-articles.component.scss'
})
export class BackArticlesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<ArticleMinimumDto>();
  pageSizeOptions = [];
  pageNumber = 1;
  pageSize = 12;
  totalCount = 0;
  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private articleQueryService: ArticleQueryService,
    private articleCommandService: ArticleCommandService,
    private router: Router
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
    this.articleQueryService.getAllArticles(this.pageNumber, this.pageSize).subscribe({
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
    this.router.navigateByUrl(`back-articles/${articleId}`);
  }

  deleteArticle(articleId: number): void {
    // Confirmation dialog
    if (confirm('Delete this article permanently?')) {
      this.articleCommandService.delete(articleId).subscribe({
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
}
