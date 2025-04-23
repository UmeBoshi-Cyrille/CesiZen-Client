import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '@services/registration/registration.service';
import { RegistrationData } from '../../models/login/registration-data.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegistrationComponent {
  passwordVisible = false;
  apiErrors: Record<string, string[]> = {};

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  registrationForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  })

  constructor(
    private registrationQueryService: RegistrationService,
  ) { }

onSubmit() {
  this.apiErrors = {};
    console.log(this.registrationForm.value);

    const registrationData: RegistrationData = {
      firstname: this.registrationForm.value.firstname ?? '',
      lastname: this.registrationForm.value.lastname ?? '',
      username: this.registrationForm.value.username ?? '',
      email: this.registrationForm.value.email ?? '',
      password: this.registrationForm.value.password ?? '',
      confirmPassword: this.registrationForm.value.confirmpassword ?? '',
    }

    if (this.registrationForm.valid) {
      this.registrationQueryService.registerUser(registrationData).subscribe({
        next: (response) => {
          console.log('Registered successfully:', response);
          setTimeout(() => {
            window.location.href = '/email-verification';

          }, 3000);
        },
        error: (error) => {
          console.error('Error registration:', error);
        if(error?.error?.errors) {
          this.apiErrors = error.error.errors; // keys: Email, Password, ConfirmPassword, etc.
        }
        }
      });
    }
  }
}
