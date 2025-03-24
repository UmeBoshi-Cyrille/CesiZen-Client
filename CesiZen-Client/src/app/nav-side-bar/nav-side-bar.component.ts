import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-side-bar',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.scss'
})
export class NavSideBarComponent {
  //showMyContainer: boolean = false;

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
    if (this.status) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
}
