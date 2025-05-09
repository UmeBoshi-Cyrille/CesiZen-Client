import { Component } from '@angular/core';
import { ResetPassword } from '@models/password/reset-password.interface';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PasswordService } from '@services/password/password.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone:true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  apiErrors: Record<string, string[]> = {};
  passwordForm = new FormGroup({
    currentpassword: new FormControl('', Validators.required),
    newpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('', Validators.required)
  });

  constructor(
    private passwordService: PasswordService,
    private router: Router
  ) { }

  cancelEditPassword() {
    this.router.navigate(['/']);
  }

  onPasswordChange() {
    this.apiErrors = {};
    const resetPasswordData: ResetPassword = {
      currentPassword: this.passwordForm.value.currentpassword ?? '',
      newPassword: this.passwordForm.value.newpassword ?? '',
      confirmPassword: this.passwordForm.value.confirmpassword ?? ''
    };
    if (this.passwordForm.valid) {
      this.passwordService.resetPassword(resetPasswordData).subscribe({
        next: (response) => {
          this.router.navigate(['/profile/:id']);
          //window.location.href = '/profile/:id';
          console.log('Password updated successfully:', response);
        },
        error: (error) => {
          console.error('Error updating password:', error);
          if (error?.error?.errors) {
            this.apiErrors = error.error.errors; // keys: Title, Time... etc.
          } else {
            this.apiErrors = { general: ['An unexpected error occurred.'] };
          }
        }
      });
    }
    console.log('ExerciseFormComponent initialized.');
  }
}
