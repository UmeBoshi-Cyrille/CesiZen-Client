import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly apiUrlVerifyEmail = environment.verifyEmailUrl;
  private readonly apiUrlResendEmailVerification = environment.resendEmailVerificationUrl;

  constructor(private http: HttpClient) { }

  verifyEmail(email: string, token: string): Observable<unknown> {
    const params = this.setParams(email, token);

    return this.http.post(this.apiUrlVerifyEmail, null, { params, withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  resendVerifyEmail(email: string, token: string): Observable<unknown> {
    const params = this.setParams(email, token);

    return this.http.post(this.apiUrlResendEmailVerification, { params, withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  private setParams(email: string, token: string): HttpParams {
    return new HttpParams()
      .set('token', token)
      .set('email', email);
  }
}
