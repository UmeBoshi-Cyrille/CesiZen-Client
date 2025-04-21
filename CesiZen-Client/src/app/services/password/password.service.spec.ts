import { TestBed } from '@angular/core/testing';
import { PasswordService } from './password.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ForgetPasswordService', () => {
  let service: PasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PasswordService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
});
    service = TestBed.inject(PasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
