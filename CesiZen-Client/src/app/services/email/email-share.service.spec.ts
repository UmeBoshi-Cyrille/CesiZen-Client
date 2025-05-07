import { TestBed } from '@angular/core/testing';
import { EmailShareService } from './email-share.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('EmailShareService', () => {
  let service: EmailShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmailShareService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
});
    service = TestBed.inject(EmailShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
