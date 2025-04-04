import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { ArticleQueryService } from '../../services/article-query.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-article',
  imports: [CommonModule],
  templateUrl: './single-article.component.html',
  styleUrl: './single-article.component.scss'
})
export class SingleArticleComponent implements OnInit {
  article$: Observable<Article> | undefined;  // Adjust the type

  constructor(
    private route: ActivatedRoute,
    private articleQueryService: ArticleQueryService
  ) { }

  ngOnInit() {
    this.getSingleArticle();
  }

  private getSingleArticle(): void {
    const articleId = Number(this.route.snapshot.params['id']);
    this.article$ = this.articleQueryService.getArticleDetails(articleId);
    this.articleQueryService.getArticleDetails(articleId)
  }
}
