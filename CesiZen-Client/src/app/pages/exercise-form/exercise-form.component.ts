import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewExercise } from '@models/exercise/new-exercise';
import { ExerciseCommandService } from '@services/exercise/exercise-command.service';

@Component({
  selector: 'app-exercise-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.scss'
})
export class ExerciseFormComponent {
  exerciseForm = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(0),
    time: new FormControl(0),
    userId: new FormControl(57),
  })

  constructor(
    private exerciseCommandService: ExerciseCommandService,
  ) { }

  onSubmit() {
    const exerciseData: NewExercise = {
      title: this.exerciseForm.value.title ?? '',
      time: this.exerciseForm.value.time ?? 0,
      editeAt: new Date(),
      exerciseType: this.exerciseForm.value.type ?? 0,
    };
    if (this.exerciseForm.valid) {
      this.exerciseCommandService.create(exerciseData).subscribe({
        next: (response) => {
          console.log('Exercise created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating exercise:', error);
        }
      });
    }
    console.log('ExerciseFormComponent initialized.');
  }
}
