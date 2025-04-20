import { TestBed } from '@angular/core/testing';
import { ForgetPasswordService } from './forget-password.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ForgetPasswordService', () => {
  let service: ForgetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ForgetPasswordService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
});
    service = TestBed.inject(ForgetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
