import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ExerciseQueryService } from './exercise-query.service';


describe('ExerciseQueryService', () => {
  let service: ExerciseQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Provide HttpClient
      ]
    });
    service = TestBed.inject(ExerciseQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
