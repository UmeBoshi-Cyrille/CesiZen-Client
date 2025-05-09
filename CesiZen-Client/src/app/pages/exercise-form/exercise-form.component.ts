import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NewExercise } from '@models/exercise/new-exercise';
import { ExerciseCommandService } from '@services/exercise/exercise-command.service';

@Component({
  selector: 'app-exercise-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.scss'
})
export class ExerciseFormComponent {
  apiErrors: Record<string, string[]> = {};
  exerciseForm = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(1),
    time: new FormControl(0)
  })

  constructor(
    private exerciseCommandService: ExerciseCommandService,
    private router: Router,
  ) { }

  onSubmit() {
    this.apiErrors = {};
    const exerciseData: NewExercise = {
      title: this.exerciseForm.value.title ?? '',
      time: this.exerciseForm.value.time ?? 0,
      editeAt: new Date(),
      exerciseType: this.exerciseForm.value.type ?? 0,
    };
    if (this.exerciseForm.valid) {
      this.exerciseCommandService.create(exerciseData).subscribe({
        next: (response) => {
          this.router.navigate(['/exercises']);
          console.log('Exercise created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating exercise:', error);
          if (error?.error?.errors) {
            this.apiErrors = error.error.errors; // keys: Title, Time... etc.
          }
        }
      });
    }
    console.log('ExerciseFormComponent initialized.');
  }
}
