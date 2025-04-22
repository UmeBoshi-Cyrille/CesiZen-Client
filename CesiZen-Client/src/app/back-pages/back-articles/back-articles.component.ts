import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleQueryService } from '@services/article/article-query.service';
import { ArticleMinimumDto } from '@models/article/article-minimum-dto';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ArticleCommandService } from '@services/article/article-command.service';

@Component({
  selector: 'app-back-articles',
  imports: [MatPaginatorModule, MatTableModule, CommonModule, MatIconModule],
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private articleQueryService: ArticleQueryService,
    private articleCommandService: ArticleCommandService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadArticles();
  }

  private loadArticles(): void {
    this.articleQueryService.getAllArticles(this.pageNumber, this.pageSize).subscribe({
      next: (response) => {
        this.dataSource.data = response.data;
        this.totalCount = response.totalCount;
        console.log(this.totalCount);
      },
      error: (err) => {
        console.error(err);
      } 
    })
  }

  onPageChanged(event: { pageIndex: number; pageSize: number }): void {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
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
