import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordService } from '@services/password/password.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  email = '';
  successMessage = '';
  errorMessage = '';

  constructor(private passwordService: PasswordService) { }

  onForgetPassword() {
    this.successMessage = '';
    this.errorMessage = '';
    this.passwordService.forgetPassword(this.email).subscribe({
      next: () => {
        this.successMessage = 'Un lien de réinitialisation a été envoyé à votre adresse e-mail.';
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Erreur lors de la demande de réinitialisation du mot de passe.';
      },
    });
  }
}
