import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: SingleArticleComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'diagnostics', component: DiagnosticsComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'se-connecter', component: SeConnecterComponent },
];


