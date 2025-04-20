import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ArticleQueryService } from './article-query.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ArticleQueryServicesService', () => {
  let service: ArticleQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
});
    service = TestBed.inject(ArticleQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
