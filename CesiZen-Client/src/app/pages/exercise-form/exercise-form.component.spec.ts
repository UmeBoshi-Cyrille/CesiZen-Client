import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFormComponent } from './exercise-form.component';
import { provideHttpClient } from '@angular/common/http';
import { ExerciseQueryService } from '../../../services/exercise/exercise-query.service';

describe('ExerciseFormComponent', () => {
  let component: ExerciseFormComponent;
  let fixture: ComponentFixture<ExerciseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseFormComponent],
      providers: [
        provideHttpClient(), // Provide HttpClient
        ExerciseQueryService, // Provide any services used by the component
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
