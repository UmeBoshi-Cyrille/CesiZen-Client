import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailShareService {
  private emailSource = new BehaviorSubject<string | null>(null);
  currentEmail$ = this.emailSource.asObservable();

  sendEmail(email: string) {
    this.emailSource.next(email);
  }
}
