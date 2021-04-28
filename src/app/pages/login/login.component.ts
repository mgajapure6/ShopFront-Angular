import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;



  constructor(private formBuilder: FormBuilder,
    private _userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  doLogin() {
    let formData = this.loginForm.value;
    console.log(formData);
    let isValid = this._userService.login(formData.email, formData.password);
    isValid.then(res => {
      console.log("res:", res);
      this.router.navigateByUrl("/user-dashboard");
    }).catch(err => {
      console.log("err:", err);
      let alertContainer = document.getElementById("alertContainer");
      alertContainer.innerHTML = '<div class="alert alert-danger alert-simple alert-inline">' +
        '<h4 class="alert-title">Invalid :</h4>' +
        'User not found' +
        '<button type="button" class="btn btn-link btn-close">' +
        '<i class="d-icon-times"></i>' +
        '</button>' +
        '</div>';
    });
  }


  get control() {
    return this.loginForm.controls;
  }


}
