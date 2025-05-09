import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserDataStorage } from '@models/user/user-data-storage';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [NgStyle, NgIf, RouterLink, RouterModule, RouterLinkActive, MatIconModule, CommonModule],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss'
})
export class NavMobileComponent {
  userData: UserDataStorage | null = null;
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.showDropdown = false;
    }
  }
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

  logout() {
    localStorage.removeItem('userData');
    window.location.href = '/se-connecter';
  }
}
