import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { UserService } from 'src/app/firebase/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _userService: UserService,
    private router: Router,) { }

  ngOnInit(): void {
    let rpassword = new FormControl('', Validators.required);
    let rcpassword = new FormControl('',CustomValidators.equalTo(rpassword));

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: rpassword,
      confirmPassword: rcpassword,
      name: ['', Validators.required],
      phone: ['', Validators.required],
      privacyPolicyCheck: [false, Validators.requiredTrue]
    });
  }

  saveUser() {
    let user = this.registerForm.value;
    console.log("registerForm",user);
    this._userService.registerUser(user);
    // .then(u =>{
    //   console.log("signUp",u.user);
    //   user.password = null;
    //   user.confirmPassword = null;
    //   user.uid = u.user.uid;
    //   user.photoURL = u.user.photoURL;
    //   user.emailVerified = u.user.emailVerified;
    //   this._authService.addUser(user).then(r=>{
    //     console.log("saveUser",r);
    //     let alertContainer = document.getElementById("ralertContainer");
    //     alertContainer.innerHTML = '<div class="alert alert-success alert-simple alert-inline">' +
    //     '<h4 class="alert-title">Success :</h4>' +
    //     'We sent verification email to you. please verify your email.'+
    //     '<button type="button" class="btn btn-link btn-close">' +
    //     '<i class="d-icon-times"></i>' +
    //     '</button>' +
    //     '</div>';
    //     this._authService.sendVerificationMail();
    //     this.registerForm.reset();
    //     //sendEmailVerification()
    //   }).catch(er=>{
    //     console.log("saveUser err",er);
    //     let alertContainer = document.getElementById("ralertContainer");
    //     alertContainer.innerHTML = '<div class="alert alert-danger alert-simple alert-inline">' +
    //     '<h4 class="alert-title">Error :</h4>' 
    //      +er.message+
    //     '<button type="button" class="btn btn-link btn-close">' +
    //     '<i class="d-icon-times"></i>' +
    //     '</button>' +
    //     '</div>';
    //   });
    // }).catch(err=>{
    //   let alertContainer = document.getElementById("ralertContainer");
    //   alertContainer.innerHTML = '<div class="alert alert-danger alert-simple alert-inline">' +
    //     '<h4 class="alert-title">Error :</h4>' 
    //      +(err.message)+
    //     '<button type="button" class="btn btn-link btn-close">' +
    //     '<i class="d-icon-times"></i>' +
    //     '</button>' +
    //     '</div>';
    // });

  }

  get control() {
    return this.registerForm.controls;
  }

}
