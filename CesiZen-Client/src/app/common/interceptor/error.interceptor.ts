import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastService } from '@services/toast/toast.service';
import { errorMessage } from '../environments/message-environment';


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
    case 400: // BadRequest
      handleError(error, toast, errorMessage.badRequest);
      break;
    case 401: // Unauthorized
      handleError(error, toast, errorMessage.unauthorized);
      break;
    case 403: // Forbidden
      handleError(error, toast, errorMessage.forbidden);
      break;
    case 404: // Not Found
      handleError(error, toast, errorMessage.notFound);
      break;
    case 500: // Server error
      handleError(error, toast, errorMessage.serverError);
      break;
    default:
      handleError(error, toast, errorMessage.httpError);
  }
}

function handleError(error: HttpErrorResponse, toast: ToastService, errorMessage: string) {
  const message = getErrorMessage(error);
  console.error(message);
  toast.showError(errorMessage);
}
function getErrorMessage(error: HttpErrorResponse): string {
  return error.error?.message || error.message || error.statusText || 'Unknown error';
}
