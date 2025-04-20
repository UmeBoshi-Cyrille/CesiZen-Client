/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: HTMLElement[] = [];

  showSuccess(
    message: string,
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right',
    duration: number = 3000,
    type: 'success' | 'error' | 'warning' = 'success') {
    this.showToast(message, type, duration, position);
  }

  showError(
    message: string,
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right',
    duration: number = 3000,
    type: 'success' | 'error' | 'warning' = 'error') {
    this.showToast(message, type, duration, position);
  }

  showWarning(
    message: string,
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right',
    duration: number = 3000,
    type: 'success' | 'error' | 'warning' = 'warning') {
    this.showToast(message, type, duration, position);
  }

  private showToast(
    message: string,
    type: 'success' | 'error' | 'warning' = 'success',
    duration: number = 3000, position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right')
  {
    const toast = this.buildToast(message, type);

    document.body.appendChild(toast);
    this.toasts.push(toast);

    this.setToastPosition(toast, position);

    setTimeout(() => {
      toast.remove();
      this.toasts.splice(this.toasts.indexOf(toast), 1);
      this.repositionToasts();
    }, duration);

  }

  private buildToast(
    message: string,
    type: 'success' | 'error' | 'warning' = 'success'): HTMLDivElement {
    const toast = document.createElement('div');
    const title = this.getToastType(type);
    toast.classList.add('toast', type);

    const titleElement = document.createElement('h1');
    titleElement.classList.add("toast-title");
    toast.textContent = title;

    const messageElement = document.createElement('p');
    messageElement.classList.add("toast-message");
    messageElement.textContent = message;

    toast.appendChild(titleElement);
    toast.appendChild(messageElement);

    return toast;
  }

  private setToastPosition(toast: HTMLDivElement, position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'bottom-right' ) {
    switch (position) {
      case 'top-right':
        toast.style.top = `${20 + (this.toasts.length - 1) * 120}px`;
        toast.style.right = '20px';
        break;
      case 'top-left':
        toast.style.top = `${20 + (this.toasts.length - 1) * 60}px`;
        toast.style.left = '20px';
        break;
      case 'bottom-right':
        toast.style.bottom = `${20 + (this.toasts.length - 1) * 60}px`;
        toast.style.right = '20px';
        break;
      case 'bottom-left':
        toast.style.bottom = `${20 + (this.toasts.length - 1) * 60}px`;
        toast.style.left = '20px';
        break;
    }
  }

  private repositionToasts() {
    this.toasts.forEach((toast, index) => {
      switch (toast.style.position) {
        case 'top-right':
          toast.style.top = `${20 + index * 60}px`;
          break;
        case 'top-left':
          toast.style.top = `${20 + index * 60}px`;
          break;
        case 'bottom-right':
          toast.style.bottom = `${20 + index * 60}px`;
          break;
        case 'bottom-left':
          toast.style.bottom = `${20 + index * 60}px`;
          break;
      }
    });
  }

  private getToastType(type: string): string {
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
}
