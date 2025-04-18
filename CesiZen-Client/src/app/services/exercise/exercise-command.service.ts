import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    });
  }

  update(id: number, exerciseData: ExerciseDto): Observable<unknown> {
    return this.http.post(`${this.apiCommandUrl}/${id}/update`, exerciseData, {
      withCredentials: true,
    });
  }

  delete(id: number): Observable<unknown> {
    return this.http.post(`${this.apiCommandUrl}/${id}/delete`, {
      withCredentials: true,
    });
  }
}
