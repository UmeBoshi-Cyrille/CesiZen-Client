import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CategoryCommandService } from '@services/category/category-command.service';
import { NewCategory } from '@models/category/new-category';

@Component({
  selector: 'app-create-category-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CreateCategoryDialogComponent {
  createForm = new FormGroup({
    name: new FormControl('', Validators.required),
    imagePath: new FormControl('', Validators.required),
    alternative: new FormControl('', Validators.required),
  });
  selectedImage: { file: File | null; url: string; title: string; alternative: string } = {
    file: null,
    url: '',
    title: '',
    alternative: ''
  };

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
    private categoryService: CategoryCommandService,
  ) {}
  

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          this.selectedImage = {
            file,
            url: e.target.result,
            title: '',
            alternative: ''
          };
        }
      };
      reader.readAsDataURL(file);
    }
  }

  removeSelectedImage(): void {
    this.selectedImage = { file: null, url: '', title: '', alternative: '' };
  }

  //onCreate(): void {
  //  if (
  //    this.createForm.valid &&
  //    this.selectedImage.file &&
  //    this.selectedImage.title &&
  //    this.selectedImage.alternative
  //  ) {
  //    // Pass all data back to parent
  //    this.dialogRef.close({
  //      ...this.createForm.value,
  //      image: {
  //        file: this.selectedImage.file,
  //        title: this.selectedImage.title,
  //        alternative: this.selectedImage.alternative
  //      }
  //    });
  //  }
  //}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    //if (this.createForm.invalid) {
    //  return;
    //}
    const categoryData: NewCategory = {
      name: this.createForm.value.name ?? '',
      imagePath: this.createForm.value.imagePath ?? '',
      alternative: this.createForm.value.alternative ?? '',
    };
    this.categoryService.create(categoryData).subscribe({
      next: (response) => {
        console.log('Article créé avec succès:', response);
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'article:', error);
      }
    });
  }
}
