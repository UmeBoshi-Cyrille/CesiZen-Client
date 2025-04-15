import { NgIf, NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-side-bar',
  standalone: true,
  imports: [NgStyle, NgIf, RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.scss'
})
export class NavSideBarComponent {
  username: string | null = null;
  isLoggedIn = false;
  constructor(
    private route: RouterModule
  ) {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
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
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/se-connecter';
  }
}
