import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@models/category/category';
import { map, Observable } from 'rxjs';
import { environment } from '../../common/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryQueryService {
  private apiUrl = environment.categoryIndexUrl;
  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<{ value: { data: Category[] } }>(this.apiUrl).pipe(
      map(response => {
        console.log('API Response:', response);
        return response.value.data;
      })
    );
  }
}
