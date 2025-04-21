import { Component, OnInit } from '@angular/core';
import { ArticleQueryService } from '@services/article/article-query.service';

@Component({
  selector: 'app-back-articles',
  imports: [],
  templateUrl: './back-articles.component.html',
  styleUrl: './back-articles.component.scss'
})
export class BackArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleQueryService: ArticleQueryService) { }

  ngOnInit() {

    this.articleQueryService.getAllArticles(),
      
    );

    this.imageService.fetchAndProcessItems(
      this.cdr,
      () => this.categoryQueryService.getAllCategories(),
      (categories) => this.categories = categories,
    );
  }
}
