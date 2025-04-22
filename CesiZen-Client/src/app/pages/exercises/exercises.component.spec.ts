import { TestBed } from '@angular/core/testing';
import { ExercisesComponent } from './exercises.component';
import { provideHttpClient } from '@angular/common/http';
import { ExerciseQueryService } from '@services/exercise/exercise-query.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ExercisesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisesComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),// Provide HttpClient
        ExerciseQueryService, // Provide any services used by the component
      ],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExercisesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

