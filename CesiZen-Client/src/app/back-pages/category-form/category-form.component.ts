import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CategoryCommandService } from '@services/category/category-command.service';
import { NewCategory } from '@models/category/new-category';
import { Router } from '@angular/router';
import { ImageService } from '@services/image/image.service';
import { firstValueFrom } from 'rxjs';

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
    alternative: new FormControl('', Validators.required),
  });
  selectedImage!: { file: File; url: string; title: string; alternative: string } | null;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
    private categoryService: CategoryCommandService,
    private imageService: ImageService,
    private router: Router,
  ) {}
  

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          this.selectedImage = {
            file: file,
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
    this.selectedImage = null;
  }

  

  onCancel(): void {
    this.dialogRef.close();
  }

  async uploadAndProcessImages(): Promise<string> {

    try {

      const apiPath = await firstValueFrom(this.imageService.uploadImage(this.selectedImage!.file));

      if (apiPath) {
        return apiPath;
      }

      return apiPath;

    } catch (error) {
      console.error('Erreur lors du traitement des images:', error);
      return '';
    }
  }

  onSubmit(): void {
    if (this.createForm.invalid) {
      return;
    }

    if (!this.selectedImage) {
      return;
    }

    this.uploadAndProcessImages().then((imagePath: string) => {
      if (!imagePath) {
        console.error('Image upload failed, aborting category creation');
        return;
      }

      const categoryData: NewCategory = {
        name: this.createForm.value.name ?? '',
        imagePath: imagePath ?? '',
        alternative: this.createForm.value.alternative ?? '',
      };
      this.dialogRef.close();
      this.categoryService.create(categoryData).subscribe({
        next: (response) => {
          console.log('Article créé avec succès:', response);
        },
        error: (error) => {
          console.error('Erreur lors de la création de l\'article:', error);
        }
      });
    });
  }
}
