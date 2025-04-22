import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackArticlesComponent } from './back-articles.component';
import { provideHttpClient } from '@angular/common/http';

describe('BackArticlesComponent', () => {
  let component: BackArticlesComponent;
  let fixture: ComponentFixture<BackArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackArticlesComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
