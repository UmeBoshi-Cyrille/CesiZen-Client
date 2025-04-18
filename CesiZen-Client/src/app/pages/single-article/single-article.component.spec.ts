import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { SingleArticleComponent } from './single-article.component';
import { ArticleQueryService } from '../../../services/article/article-query.service';

describe('SingleArticleComponent', () => {
  let component: SingleArticleComponent;
  let fixture: ComponentFixture<SingleArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleArticleComponent],
      providers: [
        provideHttpClient(), // Provide HttpClient
        ArticleQueryService, // Provide any services used by the component
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
