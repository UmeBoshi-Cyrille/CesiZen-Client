import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { NewExercise } from '@models/exercise/new-exercise';
import { environment } from '@environments/environment';
import { ExerciseDto } from '@models/exercise/exercise-dto';

@Injectable({
  providedIn: 'root'
})
export class ExerciseCommandService {
  private apiCreateUrl = environment.exerciseCreateUrl;
  private apiCommandUrl = environment.exerciseCommandUrl;
  constructor(private http: HttpClient) { }

  create(exerciseData: NewExercise): Observable<unknown> {
    return this.http.post(this.apiCreateUrl, exerciseData, {
      withCredentials: true,
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      }
    ));
  }

  update(id: number, exerciseData: ExerciseDto): Observable<unknown> {
    const url = `${this.apiCommandUrl}/${id}/update`;
    return this.http.put(url, exerciseData, { withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      }
      ));;
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.apiCommandUrl}/${id}/delete`;
    return this.http.delete(url, { withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      }
      ));;
  }
}
