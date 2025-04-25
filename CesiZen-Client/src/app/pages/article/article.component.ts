import { Component, OnInit } from '@angular/core';
import { from, map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Article } from '@models/article/article';
import { ArticleQueryService } from '@services/article/article-query.service';
import { ImageService } from '@services/image/image.service';

@Component({
  selector: 'app-article',
  imports: [CommonModule, DatePipe],
  standalone: true,
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  article$!: Observable<Article & { imageSrc: string }>;

  constructor(
    private route: ActivatedRoute,
    private articleQueryService: ArticleQueryService,
    private imageService: ImageService,
  ) { }

  ngOnInit() {
    this.getSingleArticle();
  }

  private getSingleArticle(): void {
    const articleId = Number(this.route.snapshot.params['id']);
    this.article$ = this.articleQueryService.getArticleDetails(articleId).pipe(
      switchMap(article => {
        const imagePath = this.imageService.getImageUrl(article.imagePath);
        return from(this.imageService.checkImageExists(imagePath)).pipe(
          map(exists => ({
            ...article,
            imageSrc: exists ? imagePath : '/assets/default.jpg'
          }))
        );
      })
    );
  }
  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/default.jpg';
  }
}
