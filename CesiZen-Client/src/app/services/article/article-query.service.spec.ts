import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ArticleQueryService } from './article-query.service';

describe('ArticleQueryServicesService', () => {
  let service: ArticleQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Provide HttpClient
      ],
});
    service = TestBed.inject(ArticleQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
