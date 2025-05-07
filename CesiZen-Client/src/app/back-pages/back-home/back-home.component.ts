import { Component } from '@angular/core';
import { BackArticlesComponent } from '../back-articles/back-articles.component';
import { BackCategoryComponent } from '../back-category/back-category.component';
import { BackUsersComponent } from '../back-users/back-users.component';
import { UserDataStorage } from '@models/user/user-data-storage';

@Component({
  selector: 'app-back-home',
  standalone: true,
  imports: [BackArticlesComponent, BackCategoryComponent, BackUsersComponent],
  templateUrl: './back-home.component.html',
  styleUrl: './back-home.component.scss'
})
export class BackHomeComponent {
  userData: UserDataStorage | null = null;

  constructor() {
    const storedAccount = localStorage.getItem('userData');

    if (storedAccount) {
      this.userData = JSON.parse(storedAccount);
    }
  }
}
