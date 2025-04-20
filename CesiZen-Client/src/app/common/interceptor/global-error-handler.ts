import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error: any) {
    console.error('Global Error: ', error);
    alert('An error occured!');
  }

  httpHandleError(error: HttpErrorResponse): void {
    switch (error.status) {
      case 401:
        alert('');
        break;
      case 404:
        alert('');
        break;
      case 500:
        break;
      default:
        alert('Une erreur inconnue est survenue.');

    }
  }
}

