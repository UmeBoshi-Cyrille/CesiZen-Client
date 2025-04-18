import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDataStorage } from '@models/user/user-data-storage';
import { LoginData } from '@models/connexion/login-data';
import { UserData } from '@models/user/user-data';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnexionQueryService {
  private readonly apiUrl = environment.loginUrl;

  constructor(private http: HttpClient) { }
  connecteUser(connexionData: LoginData): Observable<UserDataStorage> {
    const result = this.http.post<UserData>(this.apiUrl, connexionData).pipe(
      map(data => new UserDataStorage(
        data.id,
        data.username,
        data.createdAt,
        data.isActive,
        data.role
      )));
    ////console.log('API Result:', result);
    //const response = this.http.post(this.apiUrl, connexionData);
    //console.log('API Response:', response);
    return result;
  }
}
