import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '@services/email/email.service';

@Component({
  selector: 'app-email-verified',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  templateUrl: './email-verified.component.html',
  styleUrl: './email-verified.component.scss'
})
export class EmailVerifiedComponent implements OnInit {
  token!: string;
  email!: string;
  message!: string;
  isLoading = true;
  error!: string;
  isSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];

      if (!this.token || !this.email) {
        this.error = 'Lien de vérification invalide';
        return;
      }

      this.verifyEmail();
    });
  }

  verifyEmail() {
    this.emailService.verifyEmail(this.email, this.token).subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (response: any) => {
        this.isLoading = false;
        
        if (response.status === 200) {
          this.message = response?.message || 'Votre email a été vérifié avec succès !';
          this.isSuccess = true;
          // Optional: Redirect after delay
          
        } else {
          this.error = 'Invalid or expired verification link';
        }

        if (this.isSuccess) {
          setTimeout(() => this.router.navigate(['/login']), 4000);
        }
      },
      error: () => {
        this.isLoading = false;
        this.error = 'Verification failed. Please try again.';
      }
    });
  }
}
