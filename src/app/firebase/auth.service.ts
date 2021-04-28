
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data

  constructor(private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      console.log("authState user", user);
      if (user) {
        this.findUserByUid(user.uid).then(sub=>{
          sub.subscribe(uArr=>{
            if(uArr.length){
              this.userData = uArr[0];
              console.log("userData",this.userData);
              localStorage.setItem('user', JSON.stringify(this.userData));
              JSON.parse(localStorage.getItem('user'));
            }
            console.log("uArr",uArr);
          });
        });
        
      } else {
        localStorage.removeItem('user');
        JSON.parse(localStorage.getItem('user'));
      }

      console.log("authState userData", this.userData);
    })
  }

  // Sign in with email/password
  async signIn(email, password): Promise<any> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign up with email/password
  async signUp(user: any): Promise<any> {
    return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
  }

  async addUser(user: any) {
    return await this.afs.collection("userData").add(user);
  }

  async findUserByUid(uid: string) {
    console.log("findUserByUid uid", uid);
    return await this.afs.collection("userData",ref => ref.where('uid', '==', uid)).valueChanges();
    // await docObserval.subscribe(uArr=>{
    //   if(uArr.length){
    //     return uArr[0];
    //   }
    //   console.log("uArr",uArr);
    // });
    // this.afs.collection("user", ref => ref.where('uid', '==', uid)).doc().ref.get().then(d=>{
    //   console.log("d",d.data());
    //   let dd = this.afs.collection("user").doc(d.id).get();
    //   console.log("dd",dd);
    // });
    //console.log("findUserByUid uid doc", doc);

  }

  async findUserByEmail(email: string) {
    return await this.afs.collection("userData", ref => ref.where('email', '==', email)).get();
  }

  async findUserByPhone(phone: string) {
    return await this.afs.collection("userData", ref => ref.where('phone', '==', phone)).get();
  }

  // Send email verfificaiton when new user sign up
  sendVerificationMail() {
    return firebase.default.auth().currentUser.sendEmailVerification();
    // return this.afAuth.
    // .then(() => {
    //   this.router.navigate(['verify-email-address']);
    // })
  }

  // Reset Forggot password
  forgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  //  GoogleAuth() {
  //   return this.AuthLogin(new GoogleAuthProvider());
  // }

  // Auth logic to run auth providers
  // AuthLogin(provider) {
  //   return this.afAuth.signInWithPopup(provider)
  //     .then((result) => {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //       })
  //       this.setUserData(result.user);
  //     }).catch((error) => {
  //       window.alert(error)
  //     })
  // }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  // setUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const userData: any = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }

  // Sign out 
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      //this.router.navigate(['/login']);
    })
  }
}
