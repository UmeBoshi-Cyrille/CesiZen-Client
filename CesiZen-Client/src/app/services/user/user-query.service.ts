import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Pagination } from '@models/pagination/pagination.interface';
import { map, Observable } from 'rxjs';
import { PaginationData } from '@models/pagination/pagination-data.interface';
import { User } from '@models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserQueryService {
  private readonly apiUrlSearch = environment.userSearchUrl;
  private readonly apiUrlIndex = environment.userIndexUrl;
  private readonly apiUrlDetailsByUsername = environment.userGetbyUsernameUrl;
  private readonly apiUrlProfile = environment.userGetProfileUrl;
  private readonly apiUrlQuery = environment.userQueryUrl;

  constructor(private http: HttpClient) { }

  search(term: string, pagination: Pagination): Observable<PaginationData> {
    const params = new HttpParams({ fromObject: { ...pagination } })
                      .set('searchTerm', term);
    return this.http.get<{ value: PaginationData }>(this.apiUrlSearch, { params, withCredentials: true }).pipe(
      map((response) => response.value)
    );
  }

  index(pagination: Pagination): Observable<PaginationData> {
    const params = new HttpParams({ fromObject: { ...pagination } });
    return this.http.get<{ value: PaginationData }>(this.apiUrlIndex, { params, withCredentials: true }).pipe(
      map((response) => response.value)
    );
  }

  details(id: number): Observable<User> {
    const url = `${this.apiUrlQuery}/${id}/details`;
    const params = new HttpParams()
        .set('id', id);
    return this.http.get<{ value: User }>(url, { params, withCredentials: true }).pipe(
      map((response) => response.value)
    );
  }

  detailsByUsername(username: string): Observable<User> {
    const params = new HttpParams()
      .set('username', username);
    return this.http.get<{ value: User }>(this.apiUrlDetailsByUsername, { params, withCredentials: true }).pipe(
      map((response) => response.value)
    );
  }

  getProfile(): Observable<User> {
    return this.http.get<{ value: User }>(this.apiUrlProfile, { withCredentials: true }).pipe(
      map((response) => response.value)
    );
  }
}
