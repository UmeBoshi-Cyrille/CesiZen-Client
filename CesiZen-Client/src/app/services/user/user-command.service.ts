import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../common/environments/environment';
import { Observable } from 'rxjs';
import { AccountActivation } from '../../models/login/account-activation.inerface';

@Injectable({
  providedIn: 'root'
})
export class UserCommandService {
  private readonly apiUrlCommand = environment.userCommandUrl;
  private readonly apiUrlActivation = environment.accountActivationUrl;

  constructor(private http: HttpClient) { }

  //updateUsername(id: number, username: string): Observable<unknown> {
  //  const url = `${this.apiUrlCommand}/${id}/update-username`;
  //  const params = new HttpParams().set('username', username);
  //  return this.http.post(url, { params, withCredentials: true });
  //}

  updateUsername(id: number, username: string): Observable<unknown> {
    const url = `${this.apiUrlCommand}/${id}/update-username`;
    return this.http.post(url, username, { withCredentials: true });
  }

  updateEmail(id: number, email: string): Observable<unknown> {
    const url = `${this.apiUrlCommand}/${id}/update-email`;
    return this.http.post(url, email, { withCredentials: true });
  }

  accountActivation(account: AccountActivation): Observable<unknown> {
    return this.http.post(this.apiUrlActivation, account, { withCredentials: true });
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.apiUrlCommand}/${id}/delete`;
    return this.http.post(url, id, { withCredentials: true });
  }
}
