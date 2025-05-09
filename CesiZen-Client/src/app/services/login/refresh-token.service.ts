import { NgZone, Injectable } from '@angular/core';
import { BehaviorSubject, interval, of, Subscription } from 'rxjs';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private refreshSubscription: any;
  private countdownSubscription?: Subscription;
  private timeLeftSubject = new BehaviorSubject<number>(0);
  timeLeft$ = this.timeLeftSubject.asObservable();

  constructor(
    private loginService: LoginService,
    private ngZone: NgZone,
    private authService: AuthService
  ) { }

  setRefreshTokenTimer() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') || 'false');
    if (isLoggedIn) {
      const expirationRaw = localStorage.getItem('tokenExpirationTime');
      if (expirationRaw) {
        const expirationTimestamp = JSON.parse(expirationRaw); // ms since epoch
        const now = Date.now();
        const refreshBeforeMs = 60000; // 1 minute before expiration
        const delay = expirationTimestamp - now - refreshBeforeMs;

        if (delay > 0) {
          this.startSilentRefreshWithDelay(delay);
        } else {
          // Token expired or about to expire, refresh immediately
          this.refreshToken();
        }
      }
    }
  }

  private startSilentRefreshWithDelay(delay: number) {
    this.stopRefreshTokenTimer();

    let timeLeft = delay / 1000; // in seconds
    this.timeLeftSubject.next(timeLeft);

    this.ngZone.runOutsideAngular(() => {
      this.refreshSubscription = setTimeout(() => {
        this.ngZone.run(() => this.refreshToken());
      }, delay);
    });

    this.countdownSubscription = interval(1000).subscribe(() => {
      timeLeft--;
      this.timeLeftSubject.next(timeLeft);
      console.log(`Temps restant avant refresh : ${timeLeft} secondes`);
      if (timeLeft <= 0) {
        this.countdownSubscription?.unsubscribe();
      }
    });
  }

  private refreshToken() {
    return this.loginService.refreshToken().subscribe({
      next: (response) => {
        if (response.isLoggedIn) {
          // Optionally update user data in app state
          localStorage.setItem('userData', JSON.stringify(response.user));
          localStorage.setItem('isLoggedIn', JSON.stringify(response.isLoggedIn));
          this.saveTokenExpirationTime(response.tokenExpirationTime);
          this.authService.setLoggedIn();
          this.authService.loadUserData();
          this.setRefreshTokenTimer();
          // Schedule next silent refresh based on new token expiration
        } else {
          this.loginService.logout();
        }
      },
      error: (error) => {
        console.log(error);
        this.loginService.logout();
        return of(null);
      }
    });
  }

  private stopRefreshTokenTimer() {
    if (this.refreshSubscription) {
      clearInterval(this.refreshSubscription);
      this.refreshSubscription = null;
    }
  }

  private saveTokenExpirationTime(expirationTime: number) {
    const expirationTimestamp = Date.now() + expirationTime * 60000;
    localStorage.setItem('tokenExpirationTime', JSON.stringify(expirationTimestamp));
  }
}
