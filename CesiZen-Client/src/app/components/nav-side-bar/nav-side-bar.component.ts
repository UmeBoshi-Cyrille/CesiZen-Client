import { NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserDataStorage } from '@models/user/user-data-storage';
import { AuthService } from '@services/auth/auth.service';


@Component({
  selector: 'app-nav-side-bar',
  standalone: true,
  imports: [NgStyle, NgIf, RouterLink, RouterModule, RouterLinkActive, MatIconModule],
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.scss'
})
export class NavSideBarComponent implements OnInit{
  userData: UserDataStorage | null = null;
  isLoggedIn = false;

  constructor(
    private route: RouterModule,
    private authService: AuthService
  ) {
    const storedAccount = localStorage.getItem('userData');

    if (storedAccount) {
      this.userData = JSON.parse(storedAccount);
      this.isLoggedIn = !!this.userData?.isActive;
    }
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });

    this.authService.userData.subscribe(status => {
      this.userData = status;
    });
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
    localStorage.setItem('isLoggedIn', 'false');
    this.authService.setLoggedOut();

    window.location.href = '/se-connecter';
  }
}
