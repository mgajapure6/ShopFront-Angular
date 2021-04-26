import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _userService: UserService,
    private router: Router) { }

  canActivate(): boolean {
    if (this._userService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;

  }
}
