import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/firebase/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private _userService : UserService,
  private router : Router ) { }

  ngOnInit(): void {
  }

  logout(){
    this._userService.logout();
    this.router.navigateByUrl("/login");
  }

}
