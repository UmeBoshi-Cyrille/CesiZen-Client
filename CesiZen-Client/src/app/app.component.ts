import { Component } from '@angular/core';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [NavSideBarComponent, MainComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CesiZen-Client';
}
