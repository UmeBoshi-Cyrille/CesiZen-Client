import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { ToastNotifierService } from '../../services/toast/toast-notifier.service';
import { inject } from '@angular/core';


export const successInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastNotifierService);

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse && isSuccessResponse(event)) {
        handleSuccessResponse(event, toast);
      } 
    })
  );
};

function isSuccessResponse(event: HttpResponse<unknown>): boolean {
  return event.status >= 200 && event.status < 300;
}

function handleSuccessResponse(response: HttpResponse<unknown>, toast: ToastNotifierService): void {
  const message = getSuccessMessage(response);
  if (message) {
    toast.showSuccess(message);
  }
}

function getSuccessMessage(response: HttpResponse<unknown>): string {
  const body = response.body;
  if (body && typeof body === 'object' && 'message' in body) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (body as any).message;
  }
  return 'Operation complétée avec succès.';
}
