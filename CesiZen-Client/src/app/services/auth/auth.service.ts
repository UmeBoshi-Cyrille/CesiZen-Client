import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDataStorage } from '@models/user/user-data-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  private userSubject = new BehaviorSubject<UserDataStorage | null > (null);
  public userData: Observable<UserDataStorage | null> = this.userSubject.asObservable();
  constructor() {
    this.checkLoginStatus();
    this.loadUserData();
  }

  setLoggedIn() {
    this.loggedInSubject.next(true);
  }

  setLoggedOut() {
    this.loggedInSubject.next(false);
  }

  checkLoginStatus() {
    let storedValue = localStorage.getItem('isLoggedIn');

    if (storedValue === null) {
      localStorage.setItem('isLoggedIn', 'false');
      storedValue = 'false';
    }

    const isLoggedIn = JSON.parse(storedValue);
    this.loggedInSubject.next(isLoggedIn);
  }

  // Load user data from localStorage and update the subject
  loadUserData() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      try {
        const userDataObj = JSON.parse(userDataString);
        // Convert createdAt to Date if it's a string
        if (userDataObj.createdAt && typeof userDataObj.createdAt === 'string') {
          userDataObj.createdAt = new Date(userDataObj.createdAt);
        }
        const userData = new UserDataStorage(
          userDataObj.id,
          userDataObj.username,
          userDataObj.createdAt,
          userDataObj.isActive,
          userDataObj.role
        );
        this.userSubject.next(userData);
      } catch (error) {
        console.error('Error parsing userData from localStorage', error);
        this.userSubject.next(null);
      }
    } else {
      this.userSubject.next(null);
    }
  }

  // Save user data to localStorage and update the subject
  setUserData(userData: UserDataStorage) {
    this.userSubject.next(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
