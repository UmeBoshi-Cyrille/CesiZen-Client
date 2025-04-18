import { Routes } from '@angular/router';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { ConnexionComponent } from '@pages/connexion/connexion.component';
import { ExerciseFormComponent } from '@pages/exercise-form/exercise-form.component';
import { ExercisesComponent } from '@pages/exercises/exercises.component';
import { MainComponent } from '@pages/main/main.component';
import { RegistrationComponent } from '@pages/register/register.component';
import { SingleArticleComponent } from '@pages/single-article/single-article.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: SingleArticleComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercise-form', component: ExerciseFormComponent },

  { path: 'inscription', component: RegistrationComponent },
  { path: 'se-connecter', component: ConnexionComponent },
];


