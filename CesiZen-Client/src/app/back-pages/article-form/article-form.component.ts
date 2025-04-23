/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewArticle } from '@models/article/new-article'; 
import { NewImage } from '@models/image/new-image'; 
import { Router, RouterModule } from '@angular/router'; 
import { ArticleCommandService } from '@services/article/article-command.service';
import { CommonModule } from '@angular/common';
import { CategoryQueryService } from '@services/category/category-query.service';
import { Category } from '@models/category/category';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss'
})
export class ArticleFormComponent implements OnInit {
  articleForm = new FormGroup ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    categories:new FormControl<number[]>([], Validators.required)
});
  uploadedImages: { file: File, url: string, title: string, alternative: string }[] = [];
  newImages: NewImage[] = [];
  uploading = false;
  categories: Category[] = [];
  uploadError?: string = '';
  pageNumber = 1;
  pageSize = 12;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleCommandService,
    private categoryQueryService: CategoryQueryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.categoryQueryService.getCategories(this.pageNumber, this.pageSize).subscribe({
      next: (response) => {
        this.categories = response.data;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  onCategoryChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedCategories = this.articleForm.value.categories as number[];
    const value = +input.value; // Convert value to number

    if (input.checked) {
      this.articleForm.patchValue({
        categories: [...selectedCategories, value]
      });
    } else {
      this.articleForm.patchValue({
        categories: selectedCategories.filter(id => id !== value)
      });
    }
  }


  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImages.push({ file: file, url: e.target.result, title: '', alternative: '' }); 
      };
      reader.readAsDataURL(file);
    }
    // Réinitialiser l'input file pour permettre de sélectionner à nouveau les mêmes fichiers
    event.target.value = '';
  }

  updateImageTitle(index: number, event: any): void {
    this.uploadedImages[index].title = event.target.value;
  }

  updateImageAlternative(index: number, event: any): void {
    this.uploadedImages[index].alternative = event.target.value;
  }

  removeUploadedImage(index: number): void {
    this.uploadedImages.splice(index, 1);
  }

  async uploadAndProcessImages(): Promise<NewImage[]> {
    this.uploading = true;
    this.uploadError = '';
    const uploadedNewImages: NewImage[] = [];

    try {
      for (const image of this.uploadedImages) {
        if (image.title && image.file) {
          const filename = `${Date.now()}-${image.file.name}`; // Générer un nom de fichier unique
          // Simuler le déplacement vers le dossier assets (en réalité, vous le ferez côté serveur)
          const imagePath = `assets/images/${filename}`;

          // Créer l'objet NewImage pour la base de données
          uploadedNewImages.push({ title: image.title, path: filename, alternative: image.alternative });

          // Ici, dans une application réelle, vous devriez uploader le fichier vers votre serveur
          // et obtenir le chemin de stockage réel. Pour cet exemple, nous simulons le chemin.
          console.log(`Image "${image.title}" simulée comme sauvegardée sous: ${imagePath}`);
        } else if (!image.title) {
          this.uploadError = 'Veuillez ajouter un titre pour chaque image.';
          this.uploading = false;
          return [];
        }
      }
      this.uploading = false;
      return uploadedNewImages;
    } catch (error) {
      console.error('Erreur lors du traitement des images:', error);
      this.uploadError = 'Une erreur est survenue lors du traitement des images.';
      this.uploading = false;
      return [];
    }
  }

  onSubmit(): void {
    if (this.articleForm?.valid && this.uploadedImages.length > 0 && this.uploadedImages.every(img => img.title)) {
      this.uploadAndProcessImages().then(processedImages => {
        if (processedImages.length > 0) {
          const title = this.articleForm.value.title ? this.articleForm.value.title : ''; // Fournir une valeur par défaut
          const description = this.articleForm.value.description ? this.articleForm.value.description : '';
          const author = this.articleForm.value.author ? this.articleForm.value.author : '';
          const content = this.articleForm.value.content ? this.articleForm.value.content : '';
          const categories = this.articleForm.value.categories ? this.articleForm.value.categories : [];

          const newArticle = new NewArticle(
            title,
            description,
            author,
            content,
            new Date(),
            new Date(),
            '',
            undefined,
            processedImages,
            categories
          );

          this.articleService.create(newArticle).subscribe({
            next: (response) => {
              console.log('Article créé avec succès:', response);
              this.router.navigate(['/back-office']); 
            },
            error: (error) => {
              console.error('Erreur lors de la création de l\'article:', error);
              this.uploadError = 'Erreur lors de la création de l\'article.';
            }
          });
        }
      });
    } else {
      if (this.uploadedImages.length === 0) {
        this.uploadError = 'Veuillez sélectionner au moins une image.';
      } else if (!this.uploadedImages.every(img => img.title)) {
        this.uploadError = 'Veuillez ajouter un titre pour chaque image.';
      }
    }
  }

  isSubmitDisabled(): boolean {
    return this.articleForm.invalid
      || this.uploading
      || this.uploadedImages.length === 0
      || !this.uploadedImages.every(img => img && img.title);
  }

}
