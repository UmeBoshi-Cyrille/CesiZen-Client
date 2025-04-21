import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Article } from '@models/article/article';
import { ArticlesResponse } from '@models/article/articles-response';
import { environment } from '../../common/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleQueryService {
  private apiUrl = environment.articleGetLastUrl;
  private readonly apiUrlByCategory = environment.articleGetByCategoryUrl;
  private readonly apiUrlDetails = environment.articleQueryUrl;
  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<ArticlesResponse>(this.apiUrl).pipe(
      map((response) => response.value.data));
  }

  getLimitArticles(amount: number, limit = 4): Observable<Article[]> {
    const params = new HttpParams().set('amount', amount.toString());
    return this.http.get<{ value: Article[] }>(this.apiUrl, { params }).pipe(
      map((response) => response.value
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit)));
  }

  getArticleDetails(id: number): Observable<Article> {
    const url = `${this.apiUrlDetails}/${id}/details`;
    return this.http.get<{ value: Article }> (url).pipe(
    map((response) => response.value));
  }

  article: Article | null = null; // Define a property to store the article data

  DisplayConsole(id: number): void {
    const url = `${this.apiUrlDetails}/${id}/details`;
    this.http.get<Article>(url).subscribe({
      next: (data) => {
      this.article = data; // Store the API response in the component property
      console.log(data); // Optional: Log the data for debugging
    },
      error: (error) => {
        console.error('Error fetching article:', error); // Handle errors
      }
    });
  }

  getArticlesByCategory(
    categoryId: number,
    pageNumber: number,
    pageSize: number): Observable<Article[]> {
    const params = new HttpParams()
      .set('categoryId', categoryId.toString())
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<ArticlesResponse>(this.apiUrlByCategory, {params}).pipe(
      map((response) => response.value.data));
  }
}
