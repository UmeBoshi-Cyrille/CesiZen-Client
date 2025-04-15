import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExerciseQueryService } from '../../services/exercise/exercise-query.service';

@Component({
  selector: 'app-exercise-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.scss'
})
export class ExerciseFormComponent implements OnInit{
  exerciseForm = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(0),
    time: new FormControl(0),
    userId: new FormControl(57),
  })

  constructor(
    private exerciseQueryService: ExerciseQueryService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.exerciseForm.value);
    if (this.exerciseForm.valid) {
      this.exerciseQueryService.createExercise(this.exerciseForm.value).subscribe({
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
