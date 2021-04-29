import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { UserService } from 'src/app/firebase/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService,
    private router: Router
  ) {
    this._userService.logout();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  doLogin() {
    let formData = this.loginForm.value;
    console.log(formData);
    this._userService.login(formData.email, formData.password);
    this._userService.isLoggedIn().subscribe(isLoggedIn=>{
      if(isLoggedIn){
        this.router.navigateByUrl('/user-dashboard');
      }else{
        let alertContainer = document.getElementById('alertContainer');
        alertContainer.innerHTML =
          '<div class="alert alert-danger alert-simple alert-inline">' +
          '<h4 class="alert-title">Invalid :</h4>' +
          'User not found' +
          '<button type="button" class="btn btn-link btn-close">' +
          '<i class="d-icon-times"></i>' +
          '</button>' +
          '</div>';
      }
    });
    // if (this._userService.isAuthenticated) {
    //   this.router.navigateByUrl('/user-dashboard');
    // } else {
    //   let alertContainer = document.getElementById('alertContainer');
    //   alertContainer.innerHTML =
    //     '<div class="alert alert-danger alert-simple alert-inline">' +
    //     '<h4 class="alert-title">Invalid :</h4>' +
    //     'User not found' +
    //     '<button type="button" class="btn btn-link btn-close">' +
    //     '<i class="d-icon-times"></i>' +
    //     '</button>' +
    //     '</div>';
    // }
  }

  get control() {
    return this.loginForm.controls;
  }
}
