import { TestBed } from '@angular/core/testing';
import { UserCommandService } from './user-command.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('UserCommandService', () => {
  let service: UserCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserCommandService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
});
    service = TestBed.inject(UserCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
