/* eslint-disable @typescript-eslint/no-explicit-any */
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

  getLimitArticles(limit: number = 4): Observable<Article[]> {
    return this.http.get<ArticlesResponse>(this.apiUrl).pipe(
      map((response) => response.value.data.slice(0, limit)));
  }

}
