import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ArticleCommandService } from './article-command.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';


describe('ArticleCommandService', () => {
  let service: ArticleCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ArticleCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
