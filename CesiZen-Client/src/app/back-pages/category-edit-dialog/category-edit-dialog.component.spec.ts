import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditDialogComponent } from './category-edit-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('CategoryEditDialogComponent', () => {
  let component: CategoryEditDialogComponent;
  let fixture: ComponentFixture<CategoryEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryEditDialogComponent],
      providers: [MatDialogRef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
