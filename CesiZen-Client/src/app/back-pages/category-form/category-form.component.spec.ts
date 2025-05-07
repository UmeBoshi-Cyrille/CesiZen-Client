import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryDialogComponent } from './category-form.component';

describe('CategoryFormComponent', () => {
  let component: CreateCategoryDialogComponent;
  let fixture: ComponentFixture<CreateCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCategoryDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
