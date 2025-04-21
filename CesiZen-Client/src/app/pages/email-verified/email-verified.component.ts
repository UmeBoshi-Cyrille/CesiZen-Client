import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '@services/email/email.service';

@Component({
  selector: 'app-email-verified',
  imports: [CommonModule],
  standalone: true,
  //templateUrl: './email-verified.component.html',
  template: `
    <div *ngIf="loading">Verifying...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
    <div *ngIf="success">Email verified successfully!</div>
  `,
  styleUrl: './email-verified.component.scss'
})
export class EmailVerifiedComponent implements OnInit {
  token!: string;
  email!: string;
  loading = true;
  error!: string;
  success = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];

      if (!this.token || !this.email) {
        this.error = 'Invalid verification link';
        return;
      }

      this.verifyEmail();
    });
  }

  verifyEmail() {
    this.emailService.verifyEmail(this.email, this.token).subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (response: any) => {
        this.loading = false;
        if (response.status === 200) {
          // Optional: Redirect after delay
          setTimeout(() => this.router.navigate(['/login']), 3000);
        } else {
          this.error = 'Invalid or expired verification link';
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Verification failed. Please try again.';
      }
    });
  }
}
