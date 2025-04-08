import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ArticleQueryService } from '../../services/article-query.service';
import { SingleArticleComponent } from './single-article.component';

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
