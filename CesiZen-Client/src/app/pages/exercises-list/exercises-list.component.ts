import { Component, OnInit } from '@angular/core';
import { ExerciseQueryService } from '@services/exercise/exercise-query.service';
import { Observable } from 'rxjs';
import { ExerciseDto } from '@models/exercise/exercise-dto';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { ExerciseCommandService } from '@services/exercise/exercise-command.service';

@Component({
  selector: 'app-exercises-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule,
    MatTooltipModule,],
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.scss'
})
export class ExercisesListComponent implements OnInit {
  exercises$: Observable<ExerciseDto[]> | undefined;
  constructor(
    private exerciseQueryService: ExerciseQueryService,
    private exerciseCommandService: ExerciseCommandService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadExercises();
  }
  loadExercises() {
    this.exercises$ = this.exerciseQueryService.getExercises();
  }
  playExercise(exerciseId: number) {
    this.router.navigateByUrl(`exercises/${exerciseId}`);
  }
  deleteExercise(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet exercice ?')) { 
      this.exerciseCommandService.delete(id).subscribe({
        next: () => {
          this.loadExercises();
        },
        error: () => alert('Failed to delete exercise.')
      });
    }
  }
}
