import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExerciseQueryService } from '@services/exercise/exercise-query.service';
import { ExerciseDto } from '@models/exercise/exercise-dto';
import { ExercisesListComponent } from '../exercises-list/exercises-list.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [RouterModule, CommonModule, ExercisesListComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent implements OnInit{
  exercises: ExerciseDto[] = [];
  constructor(
    private exerciseQueryService: ExerciseQueryService,
  ) { }

  ngOnInit() {
    this.exerciseQueryService.getExercises().subscribe(
      (exercises) => this.exercises = exercises
    );
  }

}
