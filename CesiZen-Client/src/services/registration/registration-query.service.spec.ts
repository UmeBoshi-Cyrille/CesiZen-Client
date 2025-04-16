import { TestBed } from '@angular/core/testing';
import { RegistrationQueryService } from './registration-query.service';
import { provideHttpClient } from '@angular/common/http';



describe('RegistrationQueryService', () => {
  let service: RegistrationQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Provide HttpClient
      ],
    });
    service = TestBed.inject(RegistrationQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
