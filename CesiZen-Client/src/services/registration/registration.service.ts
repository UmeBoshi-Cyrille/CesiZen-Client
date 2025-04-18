import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registerUrl = environment.registrationUrl;
  constructor(private http: HttpClient) { }
  registerUser(userData: unknown): Observable<unknown> {
    return this.http.post(this.registerUrl, userData);
  }
}
