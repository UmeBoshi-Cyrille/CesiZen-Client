import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDataStorage } from '@models/user/user-data-storage';
import { LoginData } from '@models/login/login-data';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiUrlAuthenticate = environment.loginUrl;
  private readonly apiUrlVerifyEmail = environment.verifyEmailUrl;
  private readonly apiUrlResendEmailVerification = environment.resendEmailVerificationUrl;

  constructor(private http: HttpClient) { }

  authenticate(authenticationData: LoginData): Observable<UserDataStorage> {
    const result = this.http.post<UserDataStorage>(this.apiUrlAuthenticate, authenticationData).pipe(
      map(data => new UserDataStorage(
        data.id,
        data.username,
        data.createdAt,
        data.isActive,
        data.role
      )));

    return result;
  }

  verifyEmail(email: string, token: string): Observable<unknown> {
    const params = this.setParams(email, token);

    return this.http.post(this.apiUrlVerifyEmail, { params, withCredentials: true })
  }

  resendVerifyEmail(email: string, token: string): Observable<unknown> {
    const params = this.setParams(email, token);

    return this.http.post(this.apiUrlVerifyEmail, { params, withCredentials: true })
  }

  private setParams(email: string, token: string): HttpParams {
    return new HttpParams()
      .set('token', token)
      .set('email', email);
  }
}
