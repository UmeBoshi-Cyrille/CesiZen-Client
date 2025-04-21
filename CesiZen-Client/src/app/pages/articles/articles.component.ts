import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Article } from '@models/article/article';
import { ArticleQueryService } from '@services/article/article-query.service';
import { CategoryQueryService } from '@services/category/category-query.service';
import { Category } from '@models/category/category';
import { ImageService } from '@services/image/image.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  categories: Category[] = [];
  activeIndex: number | null = null;

  constructor(
    private articleQueryService: ArticleQueryService,
    private categoryQueryService: CategoryQueryService,
    private imageService: ImageService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.imageService.fetchAndProcessItems(
      this.cdr,
      () => this.articleQueryService.getLimitArticles(10, 4),
      (articles) => this.articles = articles,
    );

    this.imageService.fetchAndProcessItems(
      this.cdr,
      () => this.categoryQueryService.getAllCategories(),
      (categories) => this.categories = categories,
    );
  }

  onFocus() {
    console.log("");
  }

  trackById(index: number, article: Article): number {
    return article.id;
  }

  onViewSingleArticle(articleId: number): void {
    this.router.navigateByUrl(`articles/${articleId}`);
  }

  onViewByCategory(categoryId: number, name: string): void {
    const encodedName = encodeURIComponent(name);
    this.router.navigateByUrl(`articles/category/${categoryId}?name=${encodedName}`);
    }
  }

