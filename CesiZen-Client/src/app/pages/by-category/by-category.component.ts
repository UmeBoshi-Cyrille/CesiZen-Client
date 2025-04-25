import { Component, OnInit } from '@angular/core';
import { ArticleQueryService } from '@services/article/article-query.service';
import { from, map, Observable, switchMap, forkJoin, } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ImageService } from '@services/image/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from '@models/article/article-dto';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-by-category',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './by-category.component.html',
  styleUrl: './by-category.component.scss'
})
export class ByCategoryComponent implements OnInit {
  articles$!: Observable<(ArticleDto & { imageSrc: string })[]>;
  pageNumber = 1;
  pageSize = 12;
  totalCount = 0;
  categoryName = '';

  constructor(
    private route: ActivatedRoute,
    private articleQueryService: ArticleQueryService,
    private imageService: ImageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.categoryName = this.route.snapshot.queryParamMap.get('name') || '';
    this.loadArticles();
  }

  loadArticles() {
    const categoryId = Number(this.route.snapshot.params['id']);

    this.articles$ = this.articleQueryService.getArticlesByCategory(categoryId, this.pageNumber, this.pageSize)
      .pipe(
        switchMap(response => {
          this.totalCount = response.totalCount;
          const data = response.data || []
          return forkJoin(
            data.map(article =>
              this.processArticleImage(article))
          )
        })
      );
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadArticles();
  }


  private processArticleImage(article: ArticleDto): Observable<ArticleDto & { imageSrc: string }> {
    const imagePath = article.imagePath
      ? article.imagePath
      : '/assets/default.jpg';
    console.log(imagePath);
    const backendImageUrl = this.imageService.getImageUrl(article.imagePath);
    console.log(backendImageUrl);

    return from(this.imageService.checkImageExists(backendImageUrl)).pipe(
      map(exists => ({
        ...article,
        imageSrc: exists ? backendImageUrl : '/assets/default.jpg',
      }))
    );
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/default.jpg';
  }

  onViewSingleArticle(articleId: number): void {
    this.router.navigateByUrl(`articles/${articleId}`);
  }
}
