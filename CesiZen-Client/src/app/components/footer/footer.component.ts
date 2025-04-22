import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDataStorage } from '@models/user/user-data-storage';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  userData: UserDataStorage | null = null;
  isLoggedIn = false;
  constructor(
    private route: RouterModule
  ) {
    const storedAccount = localStorage.getItem('userData');

    if (storedAccount) {
      this.userData = JSON.parse(storedAccount);
      this.isLoggedIn = !!this.userData?.isActive;
    }
  }
}
