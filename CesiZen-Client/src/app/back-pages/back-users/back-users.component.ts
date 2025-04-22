import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserCommandService } from '@services/user/user-command.service';
import { UserQueryService } from '@services/user/user-query.service';
import { UserDto } from '@models/user/user-dto';
import { AccountActivation } from '../../models/login/account-activation.inerface';

@Component({
  selector: 'app-back-users',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule ,
    MatIconModule,
    MatDialogModule],
  templateUrl: './back-users.component.html',
  styleUrl: './back-users.component.scss'
})
export class BackUsersComponent implements OnInit {
  totalCount = 0;
  pageNumber = 1;
  pageSize = 10;
  displayedColumns: string[] = ['username', 'createdAt', 'isActive', 'actions'];
  dataSource = new MatTableDataSource<UserDto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userQueryService: UserQueryService,
    private userCommandService: UserCommandService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userQueryService.index(this.pageNumber, this.pageSize)
      .subscribe({
        next: (response) => {
          this.dataSource.data = response.data;
          this.totalCount = response.totalCount;
        },
        error: (error) => {
          this.snackBar.open('Error loading users', 'Close', { duration: 3000 });
          console.error('Error loading users:', error);
        }
      });
  }

  onPageChanged(event: { pageIndex: number; pageSize: number }): void {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

  toggleActive(userToUpdate: UserDto): void {
    const accountActication: AccountActivation = {
      id: userToUpdate.id,
      isActive: !userToUpdate.isActive
    };
    this.userCommandService.accountActivation(accountActication) // Using updateUsername as a placeholder for an isActive update endpoint
      .subscribe({
        next: () => {
          this.snackBar.open(`User "${userToUpdate.username}" active status updated`, 'Close', { duration: 3000 });
          this.loadUsers(); // Reload users to reflect the change
        },
        error: (error) => {
          this.snackBar.open('Error updating user status', 'Close', { duration: 3000 });
          console.error('Error updating user status:', error);
          // Optionally revert the toggle in the UI if the update fails
          userToUpdate.isActive = !userToUpdate.isActive;
        }
      });
  }

  deleteUser(userToDelete: UserDto): void {
    if (confirm(`Are you sure you want to delete user "${userToDelete.username}"?`)) {
      this.userCommandService.delete(userToDelete.id)
        .subscribe({
          next: () => {
            this.snackBar.open(`User "${userToDelete.username}" deleted`, 'Close', { duration: 3000 });
            this.loadUsers(); // Reload users
          },
          error: (error) => {
            this.snackBar.open('Error deleting user', 'Close', { duration: 3000 });
            console.error('Error deleting user:', error);
          }
        });
    }
  }

}
