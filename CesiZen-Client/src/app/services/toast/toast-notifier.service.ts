import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastNotifierService {

  constructor(private messageService: MessageService) { }

  showError(detail: string, summary = 'Error') {
  this.messageService.add({ severity: 'error', summary, detail });
  }

  showSuccess(detail: string, summary = 'Success') {
    this.messageService.add({ severity: 'success', summary, detail });
  }

  showInfo(detail: string, summary = 'Info') {
    this.messageService.add({ severity: 'info', summary, detail });
  }

  showWarning(detail: string, summary = 'Warning') {
    this.messageService.add({ severity: 'warning', summary, detail });
  }
}
