import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastService } from '@services/toast/toast.service';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);

    return next(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          HandleErrorEvent(error, toast);
          handleHttpStatus(error, toast);
        } else {
          console.error('An error occurred');
        }
        return throwError(() => error);
      })
    );
};

function HandleErrorEvent(error: HttpErrorResponse, toast: ToastService): void {
  if (error.error instanceof ErrorEvent) {
    console.error('Client-site error', error.error.message);
    toast.showError(error.error.message);
  }
}

function handleHttpStatus(error: HttpErrorResponse, toast: ToastService): void {
  switch (error.status) {
    case 401: // Unauthorized
      handleUnauthorizedError(error, toast);
      break;
    case 403: // Forbidden
      handleForbiddenError(error, toast);
      break;
    case 404: // Not Found
      handleNotFoundError(error, toast);
      break;
    case 500: // Server error
      handleServerError(error, toast);
      break;
    default:
      handleGenericError(error, toast);
  }
}

function handleUnauthorizedError(error: HttpErrorResponse, toast: ToastService) {
  const message = getErrorMessage(error);
  console.error('Unauthorized: ', message);
  toast.showError(`Unauthorized: ${message}`);
}

function handleForbiddenError(error: HttpErrorResponse, toast: ToastService) {
  const message = getErrorMessage(error);
  console.error('Forbidden: ', message);
  toast.showError(`Unauthorized: ${message}`);
}

function handleNotFoundError(error: HttpErrorResponse, toast: ToastService) {
  const message = getErrorMessage(error);
  console.error('Not Found: ', message);
  toast.showError(`Unauthorized: ${message}`);
}

function handleServerError(error: HttpErrorResponse, toast: ToastService) {
  const message = getErrorMessage(error);
  console.error('Server Error: ', message);
  toast.showError(`Unauthorized: ${message}`);
}

function handleGenericError(error: HttpErrorResponse, toast: ToastService) {
  const message = getErrorMessage(error);
  console.error('Http Error: ', message);
  toast.showError(`Unauthorized: ${message}`);
}

function getErrorMessage(error: HttpErrorResponse): string {
  return error.error?.message || error.message || error.statusText || 'Unknown error';
}
