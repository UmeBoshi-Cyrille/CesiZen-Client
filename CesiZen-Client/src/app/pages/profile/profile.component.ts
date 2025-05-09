import { Component, OnInit } from '@angular/core';
import { finalize, forkJoin, Observable } from 'rxjs';
import { UserQueryService } from '@services/user/user-query.service';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { UserDataStorage } from '@models/user/user-data-storage';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserCommandService } from '@services/user/user-command.service';
import { UserProfile } from '@models/user/user-profile';
import { PasswordService } from '@services/password/password.service';
import { ResetPassword } from '@models/password/reset-password.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    DatePipe,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  apiErrors: Record<string, string[]> = {};
  passwordForm = new FormGroup({
    currentpassword: new FormControl('', Validators.required),
    newpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('', Validators.required)
  });

  user$!: Observable<UserProfile>;
  userData: UserDataStorage | null = null;
  editing = false;
  editingPassword = false
  loadingUpdate = false;
  editForm!: FormGroup;
  userId!: number;
  constructor(
    private userQueryService: UserQueryService,
    private userCommandService: UserCommandService,
    private passwordService: PasswordService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) {
    const storedAccount = localStorage.getItem('userData');

    if (storedAccount) {
      this.userData = JSON.parse(storedAccount);
    }
  }
  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this.user$ = this.userQueryService.getProfile();
  }

  startEdit(userprofile: UserProfile) {
    this.editing = true;
    this.editForm = this.fb.group({
      email: [userprofile.email, [Validators.email]],
      username: [userprofile.username, [Validators.minLength(3)]]
    });
  }

  cancelEdit() {
    this.editing = false;
  }

  startEditPassword() {
    this.editingPassword = true;
  }

  cancelEditPassword() {
    this.editingPassword = false;
  }

  onSubmit(userprofile: UserProfile) {
    console.log('Submit clicked', this.editForm.value);
    if (this.editForm.invalid) return;
    this.loadingUpdate = true;
    const { username, email } = this.editForm.value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updates: Observable<any>[] = [];

    if (email !== userprofile.email) {
      const { email } = this.editForm.value;
      updates.push(this.userCommandService.updateEmail(email));
    }
    if (username !== userprofile.username) {
      const { username } = this.editForm.value;
      updates.push(this.userCommandService.updateUsername(username));
    }

    if (updates.length === 0) {
      this.loadingUpdate = false;
      this.snackBar.open('No changes made', 'Close', {
        duration: 3000,
        horizontalPosition: 'center', 
        verticalPosition: 'top'
});
      return;
    }

  forkJoin(updates)
    .pipe(
      finalize(() => {
        this.loadingUpdate = false;
      })
    )
    .subscribe({
      next: () => {
        this.snackBar.open('Profile updated successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top' });
        this.editing = false;
        this.getUser();
      },
      error: (error) => {
        console.error('Error updating profile:', error);
        this.snackBar.open('Error updating profile', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
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
          this.router.navigate(['/profile/:id'])
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
