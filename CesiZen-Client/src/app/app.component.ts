import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';
import { NavSideBarComponent } from '@components/nav-side-bar/nav-side-bar.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  imports: [NavSideBarComponent, FooterComponent, RouterOutlet, NavMobileComponent, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CesiZen-Client';
  isMobileScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 700px)']).subscribe(result => {
      this.isMobileScreen = result.matches;
    });
  }

}
