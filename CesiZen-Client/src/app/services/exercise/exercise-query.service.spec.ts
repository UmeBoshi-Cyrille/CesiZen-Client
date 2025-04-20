import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ExerciseQueryService } from './exercise-query.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';


describe('ExerciseQueryService', () => {
  let service: ExerciseQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ExerciseQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
