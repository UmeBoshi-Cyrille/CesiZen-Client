import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PasswordService } from '@services/password/password.service';
import { HttpResponse } from '@angular/common/http';
import { EmailShareService } from '@services/email/email-share.service';

@Component({
  selector: 'app-forget-password-response',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './forget-password-response.component.html',
  styleUrl: './forget-password-response.component.scss'
})
export class ForgetPasswordResponseComponent implements OnInit {
  token!: string;
  email!: string;
  message!: string;
  isLoading = true;
  error!: string;
  isSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private passwordService: PasswordService,
    private emailShareService: EmailShareService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];

      if (!this.token || !this.email) {
        this.error = 'Lien de vérification invalide';
        return;
      }

      this.verify();
    });
  }

  verify() {
    this.passwordService.forgetPasswordResponse(this.email, this.token).subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (response: HttpResponse<any>) => {
        this.isLoading = false;

        if (response.status === 200) {
          this.message = response.body?.message || 'Vos infos ont été vérifiées avec succès !';
          this.emailShareService.sendEmail(this.email);

          setTimeout(() => this.router.navigate(['/reset-forgotten-password']), 3000);
        } else {
          this.error = 'Invalid or expired verification link';
        }
      },
      error: () => {
        this.isLoading = false;
        this.error = 'Verification failed. Please try again.';
      }
    });
  }
}
