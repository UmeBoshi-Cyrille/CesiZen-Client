import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConnexionQueryService } from '../../services/connexion/connexion-query.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit{
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

  ngOnInit() { }

  onSubmit() {
    console.log(this.connexionForm.value);
    if (this.connexionForm.valid) {
      this.connexionQueryService.connecteUser(this.connexionForm.value).subscribe({
        next: (response) => {
          console.log('connected successfully:', response);
          // Store user information in localStorage or a service
          //localStorage.setItem('username', response.username);
          localStorage.setItem('isLoggedIn', 'true');

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

