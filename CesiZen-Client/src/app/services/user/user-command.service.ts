import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { AccountActivation } from '@models/login/account-activation.inerface';

@Injectable({
  providedIn: 'root'
})
export class UserCommandService {
  private readonly apiUrlCommand = environment.userCommandUrl;
  private readonly apiUrlActivation = environment.accountActivationUrl;

  constructor(private http: HttpClient) { }

  updateUsername(id: number, username: string): Observable<unknown> {
    const url = `${this.apiUrlCommand}/${id}/update-username`;
    return this.http.put(url, username, { withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  updateEmail(id: number, email: string): Observable<unknown> {
    const url = `${this.apiUrlCommand}/${id}/update-email`;
    return this.http.put(url, email, { withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );;
  }

  accountActivation(account: AccountActivation): Observable<unknown> {
    return this.http.patch(this.apiUrlActivation, account, { withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );;
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.apiUrlCommand}/${id}/delete`;
    return this.http.delete(url, { withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );;
  }
}
