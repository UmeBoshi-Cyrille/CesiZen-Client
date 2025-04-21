import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '@services/registration/registration.service';
import { RegistrationData } from '../../models/login/registration-data.interface';

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
        }
      });
    }
  }
}
