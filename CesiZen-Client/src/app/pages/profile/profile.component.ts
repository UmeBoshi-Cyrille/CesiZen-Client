import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models/user/user';
import { UserQueryService } from '@services/user/user-query.service';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { UserDataStorage } from '../../models/user/user-data-storage';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserCommandService } from '../../services/user/user-command.service';
import { firstValueFrom } from 'rxjs';

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
  user$!: Observable<User>;
  userData: UserDataStorage | null = null;
  editing = false;
  loadingUpdate = false;
  editForm!: FormGroup;
  constructor(
    private userQueryService: UserQueryService,
    private userCommandService: UserCommandService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
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

  startEdit(user: User) {
    this.editing = true;
    this.editForm = this.fb.group({
      username: [user.username, [Validators.required, Validators.email]],
      email: [user.login.email, [Validators.required, Validators.minLength(3)]]
    });
  }

  cancelEdit() {
    this.editing = false;
  }

  onSubmit(user: User) {
    console.log('Submit clicked', this.editForm.value);
    if (this.editForm.invalid) return;
    this.loadingUpdate = true;
    const { username, email } = this.editForm.value;
    const updateEmail$ = email !== user.login.email
      ? this.userCommandService.updateEmail(user.id, email)
      : null;
    const updateUsername$ = username !== user.username
      ? this.userCommandService.updateUsername(user.id, username)
      : null;

    const updates = [];
    if (updateEmail$) updates.push(updateEmail$);
    if (updateUsername$) updates.push(updateUsername$);
    if (updates.length === 0) {
      this.loadingUpdate = false;
      this.snackBar.open('No changes made', 'Close', { duration: 3000 });
      return;
    }

    Promise.all(updates.map(obs => firstValueFrom(obs)))
      .then(() => {
        this.snackBar.open('Profile updated successfully', 'Close', { duration: 3000 });
        this.loadingUpdate = false;
        this.editing = false;
        this.getUser();
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        this.snackBar.open('Error updating profile', 'Close', { duration: 3000 });
        this.loadingUpdate = false;
      })
      .finally(() => {
        this.loadingUpdate = false;
      })
  }
}
