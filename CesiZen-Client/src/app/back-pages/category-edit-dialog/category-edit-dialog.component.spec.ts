import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditDialogComponent } from './category-edit-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('CategoryEditDialogComponent', () => {
  let component: CategoryEditDialogComponent;
  let fixture: ComponentFixture<CategoryEditDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  const mockDialogData = {
    id: 123;
  }; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryEditDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData }]
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
