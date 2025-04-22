import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditDialogComponent } from './category-edit-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

describe('CategoryEditDialogComponent', () => {
  let component: CategoryEditDialogComponent;
  let fixture: ComponentFixture<CategoryEditDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  const mockDialogData = {
    category: {
      id: 123,
      name: 'Test Category',
      imagePath: 'test-path.jpg'
    }
  }; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryEditDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        FormBuilder
      ]
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
