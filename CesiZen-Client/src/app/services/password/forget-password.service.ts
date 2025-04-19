import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { ResetPassword } from '@models/password/reset-password.interface';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private readonly apiUrlForgetPassword = environment.forgetPasswordUrl;
  private readonly apiUrlForgetPasswordResponse = environment.forgetPasswordresponseUrl;
  private readonly apiUrlResetPassword = environment.resetPasswordUrl;
  private readonly apiUrlResetForgottenPassword = environment.resetForgottenPasswordUrl;

  constructor(private http: HttpClient) { }

  forgetPassword(email: string): Observable<unknown> {
    return this.http.post(this.apiUrlForgetPassword, email);
  }

  forgetPasswordResponse(email: string, token: string): Observable<unknown> {
    const params = new HttpParams()
      .set('email', email)
      .set('token', token);
      
    return this.http.post(this.apiUrlForgetPasswordResponse, { params })
  }

  resetForgottenPassword(userId: number, resetPasswordData: ResetPassword): Observable<unknown> {
    return this.http.post(this.apiUrlResetForgottenPassword, { userId, resetPasswordData }); 
  }

  resetPassword(resetPasswordData: ResetPassword): Observable<unknown> {
    return this.http.post(this.apiUrlResetPassword, resetPasswordData, {
      withCredentials: true
    })
  }
}
