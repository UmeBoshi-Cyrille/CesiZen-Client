import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';
import { NavSideBarComponent } from '@components/nav-side-bar/nav-side-bar.component';
import { AuthService } from './services/auth/auth.service';
import { RefreshTokenService } from './services/login/refresh-token.service';


@Component({
  selector: 'app-root',
  imports: [NavSideBarComponent, FooterComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'CesiZen-Client';

  constructor(
    private authService: AuthService,
    private refreshTokenService: RefreshTokenService
  ) { }

  ngOnInit() {
    this.authService.checkLoginStatus();
    this.authService.loadUserData();
    this.refreshTokenService.setRefreshTokenTimer();
  }

}
