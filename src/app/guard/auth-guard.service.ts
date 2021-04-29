import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../firebase/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this._userService.isAuthenticated) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
