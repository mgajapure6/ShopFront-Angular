import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts = new BehaviorSubject<any[]>([]);
  private cartCount = new BehaviorSubject<number>(0);
  private cartTotValue = new BehaviorSubject<number>(0);


  constructor() { }

  getCartCount(): Observable<number> {
    return this.cartCount.asObservable();
  }

  getCartTotalValue(): Observable<number> {
    return this.cartTotValue.asObservable();
  }

  getCartProducts(): Observable<any> {
    return this.cartProducts.asObservable();
  }

  setCartProducts(product: any): void {
    //console.log("setCartProducts",product);
    let currentCartProducts = this.cartProducts.getValue() as any[];
    console.log("currentCartProducts", currentCartProducts);
    let isExist = false;
    currentCartProducts.forEach(p => {
      if(p.id==product.id){
        p.qty = p.qty + 1;
        isExist = true;
      }
    });
    if(!isExist){
      currentCartProducts.push(product);
    }
    let cartValue = 0;
    currentCartProducts.forEach(p => {
      cartValue = cartValue + (p.qty * p.price);
    });
    this.cartTotValue.next(cartValue);
    this.cartCount.next(currentCartProducts.length);
    this.cartProducts.next(currentCartProducts);
  }

  removeCartProduct(prodId: number): void {
    let cartValue = 0;
    let currentCartProducts = this.cartProducts.getValue() as any[];
    for (let i = 0; i < currentCartProducts.length; i++) {
      if (currentCartProducts[i].id == prodId) {
        currentCartProducts.splice(i, 1);
      }
    }
    currentCartProducts.forEach(p => {
      cartValue = cartValue + (p.qty * p.price);
    });
    this.cartTotValue.next(cartValue);
    this.cartCount.next(currentCartProducts.length);
    this.cartProducts.next(currentCartProducts);
  }
}
