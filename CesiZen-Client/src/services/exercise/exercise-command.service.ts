import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewExercise } from '@models/exercise/new-exercise';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseCommandService {
  private apiUrl = environment.exerciseCreateUrl;
  constructor(private http: HttpClient) { }

  createExercise(exerciseData: NewExercise): Observable<unknown> {
    return this.http.post(this.apiUrl, exerciseData, {
      withCredentials: true,
    });
  }
}
