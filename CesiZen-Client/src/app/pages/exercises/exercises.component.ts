import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExerciseQueryService } from '@services/exercise/exercise-query.service';
import { Exercise } from '@models/exercise/exercise';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent implements OnInit{
  exercises: Exercise[] = [];
  constructor(
    private exerciseQueryService: ExerciseQueryService,
  ) { }

  ngOnInit() {
    this.exerciseQueryService.getAllExercises(58).subscribe(
      exercises => this.exercises = exercises
    );
  }

}
