import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrationQueryService } from '../../../services/registration/registration-query.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  passwordVisible = false;
  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  inscriptionForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
  })
  constructor(
    private registrationQueryService: RegistrationQueryService,
  ) { }
  onSubmit() {
    console.log(this.inscriptionForm.value);
    if (this.inscriptionForm.valid) {
      this.registrationQueryService.registerUser(this.inscriptionForm.value).subscribe({
        next: (response) => {
          console.log('Registered successfully:', response);
          window.location.href = '/se-connecter';
        },
        error: (error) => {
          console.error('Error registration:', error);
        }
      });
    }
  }
}
