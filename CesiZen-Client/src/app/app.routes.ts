import { Routes } from '@angular/router';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { LoginComponent } from '@pages/login/login.component';
import { ExerciseFormComponent } from '@pages/exercise-form/exercise-form.component';
import { ExercisesComponent } from '@pages/exercises/exercises.component';
import { HomeComponent } from '@pages/home/home.component';
import { RegistrationComponent } from '@pages/register/register.component';
import { SingleArticleComponent } from '@pages/single-article/single-article.component';
import { ByCategoryComponent } from '@pages/by-category/by-category.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: SingleArticleComponent },
  { path: 'articles/category/:id', component: ByCategoryComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercise-form', component: ExerciseFormComponent },

  { path: 'inscription', component: RegistrationComponent },
  { path: 'se-connecter', component: LoginComponent },
];


