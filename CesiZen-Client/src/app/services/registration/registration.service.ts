import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { RegistrationData } from '@models/login/registration-data.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registerUrl = environment.registrationUrl;
  constructor(private http: HttpClient) { }

  registerUser(userData: RegistrationData): Observable<unknown> {
    return this.http.post(this.registerUrl, userData).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );;
  }
}
