import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ExercisesComponent } from './exercises/exercises.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: SingleArticleComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercise-form', component: ExerciseFormComponent },
 
  { path: 'inscription', component: InscriptionComponent },
  { path: 'se-connecter', component: SeConnecterComponent },
];


