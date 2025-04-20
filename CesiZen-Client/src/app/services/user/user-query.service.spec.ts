import { TestBed } from '@angular/core/testing';
import { UserQueryService } from './user-query.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';


describe('UserQueryService', () => {
  let service: UserQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserQueryService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
});
    service = TestBed.inject(UserQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
