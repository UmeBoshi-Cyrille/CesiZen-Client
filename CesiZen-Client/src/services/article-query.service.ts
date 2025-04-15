import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Article } from '../models/article';
import { ArticlesResponse } from '../models/articles-response';

@Injectable({
  providedIn: 'root'
})
export class ArticleQueryService {
  private apiUrl = 'https://localhost:5001/api/articles/query/get';
  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<ArticlesResponse>(this.apiUrl).pipe(
      map((response) => response.value.data));
  }

  getLimitArticles(limit = 4): Observable<Article[]> {
    return this.http.get<ArticlesResponse>(this.apiUrl).pipe(
      map((response) => response.value.data
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit)));
  }

  getArticleDetails(id: number): Observable<Article> {
    const url = `https://localhost:5001/api/articles/query/${id}/details`;
    return this.http.get<{ value: Article }> (url).pipe(
    map((response) => response.value));
  }

  article: Article | null = null; // Define a property to store the article data

  DisplayConsole(id: number): void {
    const url = `https://localhost:5001/api/articles/query/${id}/details`;
    this.http.get<Article>(url).subscribe(
      (data) => {
        this.article = data; // Store the API response in the component property
        console.log(data); // Optional: Log the data for debugging
      },
      (error) => {
        console.error('Error fetching article:', error); // Handle errors
      }
    );
  }


}
