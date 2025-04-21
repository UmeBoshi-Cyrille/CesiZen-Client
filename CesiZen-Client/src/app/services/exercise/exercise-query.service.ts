import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Exercise } from '@models/exercise/exercise';
import { environment } from '@environments/environment';
import { ExerciseDto } from '@models/exercise/exercise-dto';

@Injectable({
  providedIn: 'root'
})
export class ExerciseQueryService {
  private apiUrlIndex = environment.exerciseIndexUrl;
  private apiUrlDetails = environment.exercisesQueryUrl;
  constructor(private http: HttpClient) { }

  getExercises(): Observable<ExerciseDto[]> {
    return this.http.get<{ value: ExerciseDto[] }>(this.apiUrlIndex, { withCredentials: true }).pipe(
      map((response) => response.value),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  getExercise(id: number): Observable<Exercise> {
    const url = `${this.apiUrlDetails}/${id}/details`
    return this.http.get<{ value: Exercise }>(url, { withCredentials: true }).pipe(
      map((response) => response.value),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
