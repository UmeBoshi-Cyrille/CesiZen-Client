import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Exercise } from '../../models/exercise/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseQueryService {
  private apiUrl = 'https://localhost:5001/api/breath-exercises/command/create';
  private urlGetAll = 'https://localhost:5001/api/breath-exercise/query/get';
  constructor(private http: HttpClient) { }

  createExercise(exerciseData: unknown): Observable<unknown> {
    return this.http.post(this.apiUrl, exerciseData);
  }
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
