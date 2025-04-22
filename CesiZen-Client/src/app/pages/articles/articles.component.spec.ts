import { TestBed } from '@angular/core/testing';
import { ArticlesComponent } from './articles.component';
import { provideHttpClient } from '@angular/common/http';
import { ArticleQueryService } from '@services/article/article-query.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';


describe('ArticlesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(), // Provide HttpClient
        ArticleQueryService, // Provide any services used by the component
      ],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


