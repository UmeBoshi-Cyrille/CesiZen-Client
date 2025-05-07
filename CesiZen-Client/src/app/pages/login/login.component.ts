import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginData } from "@models/login/login-data";
import { LoginService } from "@services/login/login.service";


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
  ) { }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    this.loginError = null;
    console.log(this.connexionForm.value);
    const loginData: LoginData = {
      identifier: this.connexionForm.value.identifier ?? '',
      password: this.connexionForm.value.password ?? '',
    };
    if (this.connexionForm.valid) {
      this.connexionQueryService.authenticate(loginData).subscribe({
          next: (response) => {
            console.log('API Response:', response);
              if (isResponse(response)) {
                try {
                  localStorage.setItem('userData', JSON.stringify(response));
                } catch (e) {
                  console.error('Error saving to localStorage:', e);
                }
              }
         
          // Redirect to homepage
          window.location.href = '/';
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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isResponse(response: any): response is {
  id: number;
  username: string;
  createdAt: Date | string;
  isActive: boolean;
  role: string;
} {
  return response &&
    typeof response === 'object' &&
    'id' in response &&
    'username' in response &&
    'createdAt' in response &&
    'isActive' in response &&
    'role' in response;
}
