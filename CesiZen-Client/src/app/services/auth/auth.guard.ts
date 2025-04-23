/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const userDataString = localStorage.getItem('userData');
  if (!userDataString) {
    return router.createUrlTree(['/login']);
  }

  try {
    const userData = JSON.parse(userDataString);
    const allowedRoles = route.data['roles'] as string[] | undefined;
    if (allowedRoles && allowedRoles.length > 0) {
      if (!allowedRoles.includes(userData.role)) {
        return router.createUrlTree(['/login']);
      }
    }
    return true;
  } catch (error) {
    return router.createUrlTree(['/login']);
  }
};
