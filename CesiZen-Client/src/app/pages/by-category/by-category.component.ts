import { Component } from '@angular/core';
import { ArticleQueryService } from '@services/article/article-query.service';
import { Article } from '../../models/article/article';
import { from, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ImageService } from '@services/image/image.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleDto } from '@models/article/article-dto';

@Component({
  selector: 'app-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './by-category.component.html',
  styleUrl: './by-category.component.scss'
})
export class ByCategoryComponent {
  articles: ArticleDto[] = [];
  pageNumber = 1;
  pageSize = 12;
  totalCount = 0;


  constructor(
    private route: ActivatedRoute,
    private articleQueryService: ArticleQueryService,
    private imageService: ImageService,
  ) { }
  //ngOnInit() {
    
    
  //}

  loadArticles() {
    const categoryId = Number(this.route.snapshot.params['id']);
    this.articleQueryService.getArticlesByCategory(categoryId, this.pageNumber, this.pageSize)
      .subscribe({
        next: (response) => {
          this.articles = response.data;
          this.totalCount = response.length;
          console.log('Articles:', this.articles);
        }
      })
  }


    private processArticleImage(article: Article): Observable<Article & { imageSrc: string }> {
    const imagePath = article.imagePath
      ? `assets/${article.imagePath}`
      : '/assets/default.jpg';

    return from(this.imageService.checkImageExists(imagePath)).pipe(
      map(exists => ({
        ...article,
        imageSrc: exists ? imagePath : '/assets/default.jpg'
      }))
    );
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/default.jpg';
  }
}
