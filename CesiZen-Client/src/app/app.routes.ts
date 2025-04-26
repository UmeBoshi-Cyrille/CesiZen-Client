import { Routes } from '@angular/router';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { LoginComponent } from '@pages/login/login.component';
import { ExerciseFormComponent } from '@pages/exercise-form/exercise-form.component';
import { ExercisesComponent } from '@pages/exercises/exercises.component';
import { HomeComponent } from '@pages/home/home.component';
import { RegistrationComponent } from '@pages/register/register.component';
import { ArticleComponent } from '@pages/article/article.component';
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
import { BackCategoryComponent } from './back-pages/back-category/back-category.component';
import { authGuard } from '@services/auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'articles/category/:id', component: ByCategoryComponent },
  { path: 'exercises/:id', component: ExerciseComponent, canActivate: [authGuard], data: { roles: ['User', 'Admin'] } },
  { path: 'exercises', component: ExercisesComponent, canActivate: [authGuard], data: { roles: ['User', 'Admin'] } },
  { path: 'exercise-form', component: ExerciseFormComponent, canActivate: [authGuard], data: { roles: ['User', 'Admin'] } },
  { path: 'about', component: AboutComponent },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [authGuard], data: { roles: ['User', 'Admin'] } },

  { path: 'inscription', component: RegistrationComponent },
  { path: 'se-connecter', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'verify-email/verify', component: EmailVerifiedComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'error', component: Error404Component },

  { path: 'back-office', component: BackHomeComponent },
  { path: 'back-articles', component: BackArticlesComponent },
  { path: 'back-categories', component: BackCategoryComponent },
  { path: 'back-articles/:id', component: BackArticleComponent },
  { path: 'article-form', component: ArticleFormComponent },
  { path: 'users/:id', component: BackUserComponent },
  { path: 'users', component: BackUsersComponent },
  { path: 'back-login', component: BackLoginComponent },
];


