import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-side-bar',
  standalone: true,
  imports: [NgStyle, RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.scss'
})
export class NavSideBarComponent {
  constructor(
    private route: RouterModule
  ) { }
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
