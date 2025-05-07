import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PasswordService } from '@services/password/password.service';
import { ResetForgottenPassword } from '@models/password/reset-forgotten-password.interface';
import { EmailShareService } from '@services/email/email-share.service';

@Component({
  selector: 'app-reset-forgotten-password',
  standalone: true,
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
  templateUrl: './reset-forgotten-password.component.html',
  styleUrl: './reset-forgotten-password.component.scss'
})
export class ResetForgottenPasswordComponent implements OnInit {
  apiErrors: Record<string, string[]> = {};
  email!: string;
  passwordForm = new FormGroup({
    newpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('', Validators.required)
  });

  constructor(
    private passwordService: PasswordService,
    private emailShareService: EmailShareService
  ) { }

  ngOnInit() {
    this.emailShareService.currentEmail$.subscribe(email => {
      if (email) {
        this.email = email;
      } else {
        console.warn('Email is null or undefined');
      }
    });
  }

  cancelEditPassword() {
    window.location.href = '/';
  }

  onPasswordChange() {
    this.apiErrors = {};
    const resetPasswordData: ResetForgottenPassword = {
      newPassword: this.passwordForm.value.newpassword ?? '',
      confirmPassword: this.passwordForm.value.confirmpassword ?? ''
    };
    if (this.passwordForm.valid) {
      this.passwordService.resetForgottenPassword(this.email, resetPasswordData).subscribe({
        next: (response) => {
          window.location.href = '/login';
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
