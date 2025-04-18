import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '@services/registration/registration.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegistrationComponent {
  passwordVisible = false;
  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  registrationForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
  })
  constructor(
    private registrationQueryService: RegistrationService,
  ) { }
  onSubmit() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      this.registrationQueryService.registerUser(this.registrationForm.value).subscribe({
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
