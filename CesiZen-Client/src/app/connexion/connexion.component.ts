import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConnexionQueryService } from '../../services/connexion/connexion-query.service';
import { LoginData } from '../../models/connexion/login-data';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
  passwordVisible = false;
  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  connexionForm = new FormGroup({
    identifier: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private connexionQueryService: ConnexionQueryService,
  ) { }

  onSubmit() {
    console.log(this.connexionForm.value);
    const loginData: LoginData = {
      identifier: this.connexionForm.value.identifier ?? '',
      password: this.connexionForm.value.password ?? '',
    };
    if (this.connexionForm.valid) {
      this.connexionQueryService.connecteUser(loginData).subscribe({
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
