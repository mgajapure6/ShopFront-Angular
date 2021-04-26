import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any = [];

  private isUserLoggedIn = new BehaviorSubject<boolean>(false);
  private loggedUser =  new BehaviorSubject<any>(null);

  constructor(private _productService: ProductService) {
    for (let i = 0; i <= 20; i++) {
      let u = {
        id: (i + 1),
        name: "User " + (i + 1),
        email: "user@email.com",
        username: "user" + (i + 1),
        phone: "888888888" + (i + 1),
        orders: [
          {
            id: (i + 1 + 1),
            all_status: [
              {
                status: "Ordered",
                note: "Your order has been placed",
                date: "25/04/2020 10:10 am"
              },
              {
                status: "Packed",
                note: "Your order has been packed by seller",
                date: "25/04/2020 05:00 pm"
              },
              {
                status: "Shipped",
                note: "Your order has been shipped by courier",
                date: "26/04/2020 02:20 pm"
              },
              {
                status: "Delivered",
                note: "Your order has been delivered",
                date: "30/04/2020 04:00 pm"
              }
            ],
            status_main: "Delivered", //Delivered, Shipped,Ordered, packed
            order_date: "25/04/2020 10:10 am",
            deliver_date: "30/04/2020 04:00 pm",
            products: this._productService.getLimitedProducts(2)
          }
        ],
        addresses: [
          {
            type: "Home",
            name: "User Name " + (i + 1),
            phone: "888888888" + (i + 1),
            alt_phone: "77777777" + (i + 1),
            pincode: "876776",
            state: "Maharashtra",
            city: "Nagpur",
            house_no: "65" + (i + 1),
            street: "Ayodhya Nagar",
            landmark: "Near Datta Mandir",
            country: "India"
          }
        ]
      };
      this.users.push(u);
    }

    //localStorage.setItem("user", JSON.stringify(this.users[0]));
    //this.isUserLoggedIn.next(true);
    //this.loggedUser.next(this.users[0]);
  }

  isLoggedIn(): Observable<boolean> {
    // let u = JSON.parse(localStorage.getItem("user"));
    // if (u) {
    //   return true;
    // } else {
    //   return false;
    // }
    return this.isUserLoggedIn.asObservable();
  }

  logout(): void {
    localStorage.removeItem("user");
    this.isUserLoggedIn.next(false);
    this.loggedUser.next(null);
  }

  login(username: string, password: string): boolean {
    let isValidUser = false;
    for (let u of this.users) {
      if (u.username == username && u.username == password) {
        isValidUser = true;
        localStorage.setItem("user", JSON.stringify(u));
        this.isUserLoggedIn.next(true);
        this.loggedUser.next(u);
      }
    }
    if(!isValidUser){
      localStorage.removeItem("user");
      this.isUserLoggedIn.next(false);
      this.loggedUser.next(null);
    }
    return isValidUser;
  }

  registerUser() {

  }

  updateUser(user : any, uid: number) {

  }

  getUserById(uid: number) {
    return this.users.filter(u=>{if(u.id == uid){return u}});
  }

  getUserOrdersByUserId(uid: number) {

  }

  getLoggedUser(): Observable<any>{
    return this.loggedUser.asObservable();
  }
}
