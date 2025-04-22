import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackArticleComponent } from './back-article.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BackArticleComponent', () => {
  let component: BackArticleComponent;
  let fixture: ComponentFixture<BackArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackArticleComponent],
      providers: [provideHttpClient(),
        provideHttpClientTesting()]
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
