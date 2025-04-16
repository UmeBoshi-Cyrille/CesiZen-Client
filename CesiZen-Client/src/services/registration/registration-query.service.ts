import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationQueryService {
  private registerUrl = 'https://localhost:5001/api/registration/register';
  constructor(private http: HttpClient) { }
  registerUser(userData: unknown): Observable<unknown> {
    return this.http.post(this.registerUrl, userData);
  }
}
