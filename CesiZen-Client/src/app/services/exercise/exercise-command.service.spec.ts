import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ExerciseCommandService } from './exercise-command.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';


describe('ExerciseCommandService', () => {
  let service: ExerciseCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ExerciseCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
