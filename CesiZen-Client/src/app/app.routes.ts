import { Routes } from '@angular/router';
import { MainComponent } from '@pages/main/main.component';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { SingleArticleComponent } from '@pages/single-article/single-article.component';
import { ExercisesComponent } from '@pages/exercises/exercises.component';

import { InscriptionComponent } from '@pages/inscription/inscription.component';
import { ConnexionComponent } from '@pages/connexion/connexion.component';
import { ExerciseFormComponent } from '@pages/exercise-form/exercise-form.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: SingleArticleComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercise-form', component: ExerciseFormComponent },
 
  { path: 'inscription', component: InscriptionComponent },
  { path: 'se-connecter', component: ConnexionComponent },
];


