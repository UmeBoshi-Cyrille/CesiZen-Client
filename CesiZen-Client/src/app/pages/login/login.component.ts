import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginData } from "@models/login/login-data";
import { LoginService } from "@services/login/login.service";
import { UserDataStorage } from "@models/user/user-data-storage";
import { Router } from "@angular/router";
import { AuthService } from "@services/auth/auth.service";
import { RefreshTokenService } from "@services/login/refresh-token.service";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  passwordVisible = false;
  loginError: string | null = null;

  connexionForm = new FormGroup({
    identifier: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private connexionQueryService: LoginService,
    private router: Router,
    private authService: AuthService,
    private refreshTokenService: RefreshTokenService
  ) { }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    this.loginError = null;
    const loginData: LoginData = {
      identifier: this.connexionForm.value.identifier ?? '',
      password: this.connexionForm.value.password ?? '',
    };
    if (this.connexionForm.valid) {
      this.connexionQueryService.authenticate(loginData).subscribe({
        next: (response) => {
            if (isResponse(response)) {
              localStorage.setItem('userData', JSON.stringify(response.user));
              localStorage.setItem('isLoggedIn', JSON.stringify(response.isLoggedIn));
              this.saveTokenExpirationTime(response.tokenExpirationTime);
              this.authService.setLoggedIn();
              this.authService.loadUserData();
              this.refreshTokenService.setRefreshTokenTimer();
            }
         
          // Redirect to homepage
          this.router.navigate(['/'])
        },
        error: (error) => {
          console.error('Error connexion:', error);
          if (error?.error?.errors) {
            this.loginError = error?.error?.errors || "Error inconnue";
          }
        }
      });
    }
    console.log('ConnexionFormComponent initialized.');
  }

  private saveTokenExpirationTime(expirationTime: number) {
    const expirationTimestamp = Date.now() + expirationTime * 60000;
    localStorage.setItem('tokenExpirationTime', JSON.stringify(expirationTimestamp));
  }

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isResponse(response: any): response is {
  user: UserDataStorage;
  isLoggedIn: boolean;
  tokenExpirationTime: number;
} {
  return response &&
    typeof response === 'object' &&
    'user' in response &&
    'isLoggedIn' in response &&
    'tokenExpirationTime' in response;
}
