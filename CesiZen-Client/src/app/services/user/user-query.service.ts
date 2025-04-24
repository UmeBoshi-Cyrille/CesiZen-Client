import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { PaginationData } from '@models/pagination/pagination-data.interface';
import { UserDto } from '@models/user/user-dto';
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

  search(
    term: string,
    pageNumber: number,
    pageSize: number): Observable<PaginationData<UserDto>> {

    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('searchTerm', term);

    return this.http.get<{ value: PaginationData<UserDto> }>(this.apiUrlSearch, { params, withCredentials: true }).pipe(
      map((response) => response.value),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  index(
    pageNumber: number,
    pageSize: number): Observable<PaginationData<UserDto>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<{ value: PaginationData<UserDto> }>(this.apiUrlIndex, { params, withCredentials: true }).pipe(
      map((response) => response.value),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  details(id: number): Observable<User> {
    const url = `${this.apiUrlQuery}/${id}/details`;
    const params = new HttpParams()
        .set('id', id);
    return this.http.get<{ value: User }>(url, { params, withCredentials: true }).pipe(
      map((response) => response.value),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  detailsByUsername(username: string): Observable<User> {
    const params = new HttpParams()
      .set('username', username);
    return this.http.get<{ value: User }>(this.apiUrlDetailsByUsername, { params, withCredentials: true }).pipe(
      map((response) => response.value),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(this.apiUrlProfile, { withCredentials: true }).pipe(
      map((response) => new User(
        response.id,
        response.firstname,
        response.lastname,
        response.username,
        new Date(response.createdAt),
        new Date(response.updatedAt),
        response.isActive,
        response.role,
        response.login
      )),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
