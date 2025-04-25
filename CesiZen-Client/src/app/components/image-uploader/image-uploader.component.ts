import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageService } from '@services/image/image.service';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  error: string | null = null;

  constructor(private imageService: ImageService) { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files && input.files.length > 0 ? input.files[0] : null;
    this.error = null;
  }

  upload() {
    if (!this.selectedFile) return;
    this.imageService.uploadImage(this.selectedFile).subscribe({
      next: (path) => {
        this.imageUrl = path;
        this.error = null;
      },
      error: (err) => {
        this.error = err.message;
        this.imageUrl = null;
      }
    });
  }
}
