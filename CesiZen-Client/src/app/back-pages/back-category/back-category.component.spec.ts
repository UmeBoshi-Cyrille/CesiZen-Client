import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCategoryComponent } from './back-category.component';
import { provideHttpClient } from '@angular/common/http';

describe('BackCategoryComponent', () => {
  let component: BackCategoryComponent;
  let fixture: ComponentFixture<BackCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackCategoryComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
