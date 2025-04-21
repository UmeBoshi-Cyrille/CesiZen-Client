import { Component } from '@angular/core';
import { ToastService } from '@services/toast/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  constructor(private toastService: ToastService) { }

  showSuccess() {
    this.toastService.showSuccess('This is a custom toast!', 'top-right');
  }

  showError() {
    this.toastService.showError('This is a custom toast!', 'top-right');
  }

  showWarning() {
    this.toastService.showWarning('This is a custom toast!','top-right');
  }
}
