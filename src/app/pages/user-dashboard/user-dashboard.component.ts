import { AuthService } from './../../firebase/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private _authService : AuthService,
  private router : Router ) { }

  ngOnInit(): void {
  }

  logout(){
    this._authService.signOut();
    this.router.navigateByUrl("/home");
  }

}
