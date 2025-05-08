import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ArticleQueryService } from '@services/article/article-query.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BackArticleComponent } from './back-article.component';

describe('BackArticleComponent', () => {
  let component: BackArticleComponent;
  let fixture: ComponentFixture<BackArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackArticleComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),// Provide HttpClient
        ArticleQueryService, // Provide any services used by the component
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BackArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
