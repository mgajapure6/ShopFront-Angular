import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserLoggedIn = new BehaviorSubject<boolean>(false);
  private loggedUser = new BehaviorSubject<any>(null);

  get isAuthenticated(): boolean{
    return this.isUserLoggedIn.getValue();
  }

  isLoggedIn(): Observable<boolean> {
    return this.isUserLoggedIn.asObservable();
  }

  getLoggedUser(): Observable<any>{
    return this.loggedUser.asObservable();
  }

  constructor(
    private firestore: AngularFirestore,
    private fireauth: AngularFireAuth
  ) {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        let uid = user.uid;
        this.getUserDataByUid(uid).subscribe((arr) => {
          if (arr.length) {
            this.loggedUser.next(arr[0]);
            this.isUserLoggedIn.next(true);
            localStorage.setItem('user', JSON.stringify(arr[0]));
          } else {
            this.loggedUser.next(null);
            this.isUserLoggedIn.next(false);
            localStorage.removeItem('user');
          }
        });
      } else {
        this.loggedUser.next(null);
        this.isUserLoggedIn.next(false);
        localStorage.removeItem('user');
      }
    });
  }

  login(email: string, password: string) {
    console.log("login call")
    this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('login res.user::', res.user);
        let uid = res.user.uid;
        this.getUserDataByUid(uid).subscribe((arr) => {
          console.log('getUserDataByUid arr::', arr);
          if (arr.length) {
            this.loggedUser.next(arr[0]);
            this.isUserLoggedIn.next(true);
            localStorage.setItem('user', JSON.stringify(arr[0]));
          } else {
            this.loggedUser.next(null);
            this.isUserLoggedIn.next(false);
            localStorage.removeItem('user');
          }
        });
      })
      .catch((err) => {
        console.log('login err::', err);
        this.loggedUser.next(null);
        this.isUserLoggedIn.next(false);
        localStorage.removeItem('user');
      });
  }

  logout() {
    localStorage.removeItem('user');
    this.isUserLoggedIn.next(false);
    this.loggedUser.next(null);
    this.fireauth.signOut();
  }

  registerUser(user: any) {
    this.fireauth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        user.uid = res.user.uid;
        user.password = null;
        user.confirmPassword = null;
        user.photoURL = res.user.photoURL;
        user.emailVerified = res.user.emailVerified;
        if (user.emailVerified) {
          firebase.default.auth().currentUser.sendEmailVerification();
          localStorage.removeItem('user');
          this.isUserLoggedIn.next(false);
          this.loggedUser.next(null);
          // redirect to verify email page
        } else {
          this.firestore.collection('userData').add(user);
          this.loggedUser.next(user);
          this.isUserLoggedIn.next(true);
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
      .catch((err) => {
        console.log('registerUser err', err);
        localStorage.removeItem('user');
        this.isUserLoggedIn.next(false);
        this.loggedUser.next(null);
      });
  }

  getUserDataByUid(uid: string) {
    return this.firestore
      .collection('userData', (ref) => ref.where('uid', '==', uid))
      .valueChanges();
  }
}
