import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { CategoryDto } from '@models/category/category-dto';
import { NewCategory } from '@models/category/new-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryCommandService {
  private apiCreateUrl = environment.categoryCreateUrl;
  private apiCommandUrl = environment.categoryCommandUrl;
  constructor(private http: HttpClient) { }

  create(categoryData: NewCategory): Observable<unknown> {
    return this.http.post(this.apiCreateUrl, categoryData, {
      withCredentials: true,
    });
  }

  update(id: number, categoryData: CategoryDto): Observable<unknown> {
    const url = `${this.apiCommandUrl}/${id}/update`;
    return this.http.put(url, categoryData, { withCredentials: true });
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.apiCommandUrl}/${id}/delete`;
    return this.http.delete(url, { withCredentials: true });
  }
}
