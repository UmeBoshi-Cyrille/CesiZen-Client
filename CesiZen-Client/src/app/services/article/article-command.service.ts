import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewArticle } from '@models/article/new-article';
import { environment } from '@environments/environment';
import { ArticleDto } from '@models/article/article-dto';

@Injectable({
  providedIn: 'root'
})
export class ArticleCommandService {
  private apiCreateUrl = environment.articleCreateUrl;
  private apiCommandUrl = environment.articleCommandUrl;
  constructor(private http: HttpClient) { }

  create(articleData: NewArticle): Observable<unknown> {
    return this.http.post(this.apiCreateUrl, articleData, {
      withCredentials: true,
    });
  }

  update(id: number, ArticleData: ArticleDto): Observable<unknown> {
    const url = `${this.apiCommandUrl}/${id}/update`;
    return this.http.put(url, ArticleData, { withCredentials: true });
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.apiCommandUrl}/${id}/delete`;
    return this.http.delete(url, { withCredentials: true });
  }
}
