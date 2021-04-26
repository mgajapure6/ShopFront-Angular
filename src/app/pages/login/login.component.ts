import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  registerForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
  private _userService : UserService,
  private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['',Validators.required]
    });
    console.log("user",this._userService.getUserById(1));
  }

  doLogin(){
    let formData = this.loginForm.value;
    console.log(formData);
    let isValid = this._userService.login(formData.username, formData.password);
    if(!isValid){
      let alertContainer = document.getElementById("alertContainer");
      alertContainer.innerHTML = '<div class="alert alert-danger alert-simple alert-inline">'+
      '<h4 class="alert-title">Invalid :</h4>'+
      'User not found'+
      '<button type="button" class="btn btn-link btn-close">'+
          '<i class="d-icon-times"></i>'+
      '</button>'+
      '</div>';
    }else{
      this.router.navigateByUrl("/user-dashboard");
    }
  }

  get control(){
    return this.loginForm.controls;
  }

}
;