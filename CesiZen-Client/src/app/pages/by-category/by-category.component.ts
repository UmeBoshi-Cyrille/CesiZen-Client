import { Component, OnInit } from '@angular/core';
import { ArticleQueryService } from '@services/article/article-query.service';
import { Article } from '../../models/article/article';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './by-category.component.html',
  styleUrl: './by-category.component.scss'
})
export class ByCategoryComponent implements OnInit {
  articles$: Observable<Article[]> | undefined;
  constructor(private articleService: ArticleQueryService) { }
  ngOnInit() {
    this.articles$ = this.articleService.getArticlesByCategory(1, 1, 10);
  }
}
