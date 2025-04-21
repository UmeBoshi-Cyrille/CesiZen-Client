import { Routes } from '@angular/router';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { LoginComponent } from '@pages/login/login.component';
import { ExerciseFormComponent } from '@pages/exercise-form/exercise-form.component';
import { ExercisesComponent } from '@pages/exercises/exercises.component';
import { HomeComponent } from '@pages/home/home.component';
import { RegistrationComponent } from '@pages/register/register.component';
import { SingleArticleComponent } from '@pages/single-article/single-article.component';
import { ByCategoryComponent } from '@pages/by-category/by-category.component';
import { EmailVerificationComponent } from '@pages/email-verification/email-verification.component';
import { Error404Component } from '@pages/error-404/error-404.component';
import { ExerciseComponent } from '@pages/exercise/exercise.component';
import { ResetPassordComponent } from '@pages/reset-passord/reset-passord.component';
import { BackHomeComponent } from '@back-pages/back-home/back-home.component';
import { BackArticlesComponent } from '@back-pages/back-articles/back-articles.component';
import { BackArticleComponent } from '@back-pages/back-article/back-article.component';
import { BackUserComponent } from '@back-pages/back-user/back-user.component';
import { BackUsersComponent } from '@back-pages/back-users/back-users.component';
import { ArticleFormComponent } from '@back-pages/article-form/article-form.component';
import { BackLoginComponent } from '@back-pages/back-login/back-login.component';
import { EmailVerifiedComponent } from '@pages/email-verified/email-verified.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: SingleArticleComponent },
  { path: 'articles/category/:id', component: ByCategoryComponent },
  { path: 'exercises/:id', component: ExerciseComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercise-form', component: ExerciseFormComponent },

  { path: 'inscription', component: RegistrationComponent },
  { path: 'se-connecter', component: LoginComponent },
  { path: 'reset-password', component: ResetPassordComponent },
  { path: 'verify-email', component: EmailVerifiedComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'error', component: Error404Component },

  { path: 'back-office', component: BackHomeComponent },
  { path: 'back-articles', component: BackArticlesComponent },
  { path: 'back-articles/:id', component: BackArticleComponent },
  { path: 'article-form', component: ArticleFormComponent },
  { path: 'users/:id', component: BackUserComponent },
  { path: 'users', component: BackUsersComponent },
  { path: 'back-login', component: BackLoginComponent },
];


