import { TestBed } from '@angular/core/testing';
import { CategoryQueryService } from './category-query.service';
import { provideHttpClient } from '@angular/common/http';

describe('CategoryQueryService', () => {
  let service: CategoryQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Provide HttpClient
      ],
    });
    service = TestBed.inject(CategoryQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
