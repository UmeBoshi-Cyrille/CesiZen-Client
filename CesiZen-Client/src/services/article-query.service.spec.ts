import { TestBed } from '@angular/core/testing';

import { ArticleQueryService } from './article-query.service';

describe('ArticleQueryServicesService', () => {
  let service: ArticleQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
