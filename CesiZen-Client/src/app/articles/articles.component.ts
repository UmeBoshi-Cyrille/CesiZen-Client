import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';
import { ArticleQueryService } from '../../services/article-query.service';
import { Article } from '../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, NgFor, NgStyle, NgIf],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  activeIndex: number | null = null;

  constructor(
    private articleQueryService: ArticleQueryService,
    private router: Router
  ) { }
  ngOnInit() {
    this.articleQueryService.getLimitArticles().subscribe(
      articles => this.articles = articles
    );
  }
  trackById(index: number, article: Article): number {
    return article.id;
  }
  onViewSingleArticle(articleId: number): void {
    this.router.navigateByUrl(`articles/${articleId}`);
  }
}
