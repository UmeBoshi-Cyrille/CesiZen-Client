import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryDialogComponent } from './category-form.component';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CategoryFormComponent', () => {
  let component: CreateCategoryDialogComponent;
  let fixture: ComponentFixture<CreateCategoryDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  const mockDialogData = {
    category: {
      id: 0,
      name: 'Test Category',
      imagePath: 'test-path.jpg'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCategoryDialogComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        FormBuilder
      ]
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
