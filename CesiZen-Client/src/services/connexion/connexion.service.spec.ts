import { TestBed } from '@angular/core/testing';

import { ConnexionQueryService } from './connexion.service';
import { provideHttpClient } from '@angular/common/http';

describe('ConnexionQueryService', () => {
  let service: ConnexionQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Provide HttpClient
      ]
    });
    service = TestBed.inject(ConnexionQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
