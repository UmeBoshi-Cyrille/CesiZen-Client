import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Article } from '@models/article/article';
import { environment } from '@environments/environment';
import { PaginationData } from '@models/pagination/pagination-data.interface';
import { ArticleDto } from '@models/article/article-dto';
import { ArticleMinimumDto } from '@models/article/article-minimum-dto';

@Injectable({
  providedIn: 'root'
})
export class ArticleQueryService {
  private apiUrlLast = environment.articleGetLastUrl;
  private apiUrlIndex = environment.articleIndexUrl;
  private readonly apiUrlByCategory = environment.articleGetByCategoryUrl;
  private readonly apiUrlDetails = environment.articleQueryUrl;
  constructor(private http: HttpClient) { }

  getAllArticles(
    pageNumber: number,
    pageSize: number): Observable<PaginationData<ArticleMinimumDto>> {

    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<{ value: PaginationData<ArticleMinimumDto> }>(this.apiUrlIndex, { params }).pipe(
      map(response => ({
        data: response.value.data as ArticleMinimumDto[],
        pageNumber: response.value.pageNumber,
        pageSize: response.value.pageSize,
        totalCount: response.value.totalCount
      }))
    );
  }

  getLimitArticles(amount: number, limit = 4): Observable<Article[]> {
    const params = new HttpParams().set('amount', amount.toString());
    return this.http.get<{ value: Article[] }>(this.apiUrlLast, { params }).pipe(
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
    pageSize: number): Observable<PaginationData<ArticleDto>> {
    const params = new HttpParams()
      .set('categoryId', categoryId.toString())
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    const result = this.http.get <{ value: PaginationData<ArticleDto> } >(this.apiUrlByCategory, { params }).pipe(
      map(response => ({
        data: response.value.data as ArticleDto[],
        pageNumber: response.value.pageNumber,
        pageSize: response.value.pageSize,
        totalCount: response.value.totalCount
      }))
    );

    return result;
  }
}
