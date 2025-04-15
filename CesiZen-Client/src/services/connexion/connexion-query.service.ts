import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionQueryService {
  private apiUrl = 'https://localhost:5001/api/authentication/authenticate';

  constructor(private http: HttpClient) { }
  connecteUser(connexionData: unknown): Observable<unknown> {
    return this.http.post(this.apiUrl, connexionData);
  }
}
