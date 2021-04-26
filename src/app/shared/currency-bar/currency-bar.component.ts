import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-bar',
  templateUrl: './currency-bar.component.html',
  styleUrls: ['./currency-bar.component.css']
})
export class CurrencyBarComponent implements OnInit {

  isLoggedIn : boolean = false;
  loggedUser : any;

  constructor(private _userService : UserService,
  private router : Router) { }

  ngOnInit(): void {
    this._userService.isLoggedIn().subscribe(isLogged=>{
      this.isLoggedIn = isLogged;
    });
    this._userService.getLoggedUser().subscribe(u=>{
      this.loggedUser = u;
    });
  }

  logout(){
    this._userService.logout();
    this.router.navigateByUrl("/login");
  }

}
