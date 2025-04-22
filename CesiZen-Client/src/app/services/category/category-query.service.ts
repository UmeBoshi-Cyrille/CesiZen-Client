import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@models/category/category';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { CategoryDto } from '@models/category/category-dto';
import { PaginationData } from '@models/pagination/pagination-data.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryQueryService {
  private apiUrlIndex = environment.categoryIndexUrl;
  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<{ value: { data: Category[] } }>(this.apiUrlIndex).pipe(
      map(response => {
        console.log('API Response:', response);
        return response.value.data;
      })
    );
  }

  getCategories(
    pageNumber: number,
    pageSize: number): Observable<PaginationData<CategoryDto>> {

    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<{ value: PaginationData<CategoryDto> }>(this.apiUrlIndex, { params }).pipe(
      map(response => ({
        data: response.value.data as CategoryDto[],
        pageNumber: response.value.pageNumber,
        pageSize: response.value.pageSize,
        totalCount: response.value.totalCount
      }))
    );
  }

}

