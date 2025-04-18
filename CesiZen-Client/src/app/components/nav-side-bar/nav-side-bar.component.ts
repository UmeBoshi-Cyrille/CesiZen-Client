import { NgIf, NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserDataStorage } from '../../../models/user/user-data-storage';


@Component({
  selector: 'app-nav-side-bar',
  standalone: true,
  imports: [NgStyle, NgIf, RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.scss'
})
export class NavSideBarComponent {
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
  status = false;
  clickEvent() {
    this.status = !this.status;
  }
  @HostListener('document:click', ['$event'])
  closeNavOnOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (this.status && !target.closest('nav') && !target.closest('.openbtn')) {
      this.status = false;
    }
  }
  logout() {
    localStorage.removeItem('userData');
    window.location.href = '/se-connecter';
  }
}
