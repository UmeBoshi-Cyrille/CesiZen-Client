import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { ResetPassword } from '@models/password/reset-password.interface';
import { ResetForgottenPassword } from '@models/password/reset-forgotten-password.interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private readonly apiUrlForgetPassword = environment.forgetPasswordUrl;
  private readonly apiUrlForgetPasswordResponse = environment.forgetPasswordresponseUrl;
  private readonly apiUrlResetPassword = environment.resetPasswordUrl;
  private readonly apiUrlResetForgottenPassword = environment.resetForgottenPasswordUrl;

  constructor(private http: HttpClient) { }

  forgetPassword(email: string): Observable<unknown> {
    return this.http.post(this.apiUrlForgetPassword, { email }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forgetPasswordResponse(email: string, token: string): Observable<HttpResponse<any>> {
    const params = new HttpParams()
      .set('email', email)
      .set('token', token);
      
    return this.http.post(this.apiUrlForgetPasswordResponse, null, { params, observe: 'response', withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  resetForgottenPassword(email: string, resetPasswordData: ResetForgottenPassword): Observable<unknown> {
    const params = new HttpParams()
      .set('email', email);

    return this.http.post(this.apiUrlResetForgottenPassword, resetPasswordData, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );; 
  }

  resetPassword(resetPasswordData: ResetPassword): Observable<unknown> {
    return this.http.post(this.apiUrlResetPassword, resetPasswordData, {
      withCredentials: true
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
