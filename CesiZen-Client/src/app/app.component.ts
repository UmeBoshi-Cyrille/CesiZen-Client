import { Component } from '@angular/core';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavSideBarComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CesiZen-Client';
}
