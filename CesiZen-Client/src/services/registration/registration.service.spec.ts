import { TestBed } from '@angular/core/testing';
import { RegistrationService } from './registration.service';
import { provideHttpClient } from '@angular/common/http';



describe('RegistrationQueryService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Provide HttpClient
      ],
    });
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
