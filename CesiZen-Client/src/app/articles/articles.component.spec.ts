import { TestBed } from '@angular/core/testing';
import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


