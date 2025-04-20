import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {

    return next(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          HandleErrorEvent(error);
          handleHttpStatus(error);
        } else {
          console.error('En error occured');
        }
        return throwError(() => new Error(error.statusText));
      })
    );
};

function HandleErrorEvent(error: HttpErrorResponse): void {
  if (error.error instanceof ErrorEvent) {
    console.error('Error Event');
  }
}

function handleHttpStatus(error: HttpErrorResponse): void {
  switch (error.status) {
    case 401: // Unautorized
      handleUnautorizedError(error);
      break;
    case 403: // Forbidden
      handleForbiddenError(error);
      break;
    case 404: // Not Found
      handleNotFoundError(error);
      break;
    case 500: // Server error
      handleServorError(error);
      break;
    default:
      handleGenericError(error);
  }
}

function handleUnautorizedError(error: HttpErrorResponse) {
  console.error(error.statusText);
}

function handleForbiddenError(error: HttpErrorResponse) {
  console.error(error.statusText);
}

function handleNotFoundError(error: HttpErrorResponse) {
  console.error(error.statusText);
}

function handleServorError(error: HttpErrorResponse) {
  console.error(error.statusText);
}

function handleGenericError(error: HttpErrorResponse) {
  console.error(error.statusText);
}
