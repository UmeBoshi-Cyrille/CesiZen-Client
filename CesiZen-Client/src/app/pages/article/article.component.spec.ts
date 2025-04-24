import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ArticleComponent } from './article.component';
import { ArticleQueryService } from '@services/article/article-query.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),// Provide HttpClient
        ArticleQueryService, // Provide any services used by the component
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
