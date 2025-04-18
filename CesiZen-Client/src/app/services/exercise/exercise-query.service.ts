import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Exercise } from '@models/exercise/exercise';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseQueryService {
  private urlGetAll = environment.exerciseGetAllUrl;
  constructor(private http: HttpClient) { }

  getAllExercises(userId?: number): Observable<Exercise[]> {
    // Build query parameters
    let params = new HttpParams();
    if (userId) {
      params = params.set('userId', userId.toString());
    }

    // Make the HTTP GET request with or without query parameters
    return this.http.get<{ value: Exercise[] }>(this.urlGetAll, { params }).pipe(
      map((response) => response.value)
    );
  }
}
