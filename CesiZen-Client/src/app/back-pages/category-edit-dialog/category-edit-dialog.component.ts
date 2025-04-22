// category-edit-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-category-edit-dialog',
  standalone: true,
  imports: [MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule],
  template: `
    <h2 mat-dialog-title>Edit Category</h2>
    <mat-dialog-content>
      <form [formGroup]="editForm">
        <!-- Name Field -->
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name">
        </mat-form-field>

        <!-- Image Path Field -->
        <mat-form-field appearance="fill">
          <mat-label>Image URL</mat-label>
          <input matInput formControlName="imagePath">
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button 
              color="primary" 
              (click)="onSave()"
              [disabled]="editForm.invalid">
        Save
      </button>
    </mat-dialog-actions>
  `
})
export class CategoryEditDialogComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CategoryEditDialogComponent>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.fb.group({
      id: [data.category.id],
      name: [data.category.name],
      imagePath: [data.category.imagePath || '']
    });
  }

  onSave(): void {
    this.dialogRef.close(this.editForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
