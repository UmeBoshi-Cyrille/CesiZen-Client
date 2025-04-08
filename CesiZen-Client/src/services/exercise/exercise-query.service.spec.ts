import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ExerciseQueryServicesService } from './exercise-query-services.service';

describe('ExerciseQueryServicesService', () => {
  let service: ExerciseQueryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Provide HttpClient
      ]
    });
    service = TestBed.inject(ExerciseQueryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
