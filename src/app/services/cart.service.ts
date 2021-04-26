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


  constructor() { 
    let localStoreCart = this.getLocalStoreCart();
    if(localStoreCart){
      let cartValue : number=0;
      for(let p of localStoreCart){
        cartValue = cartValue + (p.qty * p.price);
      }
      console.log("constructor cartValue",cartValue);
      this.cartTotValue.next(cartValue);
      this.cartCount.next(localStoreCart.length);
      this.cartProducts.next(localStoreCart);
    }

  }

  getLocalStoreCart(){
    return JSON.parse(localStorage.getItem("cart"));
  }
  setLocalStoreCart(cart : any){
    localStorage.setItem("cart",JSON.stringify(cart));
  }

  getCartCount(): Observable<number> {
    return this.cartCount.asObservable();
  }

  getCartTotalValue(): Observable<number> {
    return this.cartTotValue.asObservable();
  }

  getCartProducts(): Observable<any> {
    return this.cartProducts.asObservable();
  }

  isProductExist(prodId : number): boolean{
    let currentCartProducts = this.cartProducts.getValue() as any[];
    let isExist = false;
    for (let i = 0; i < currentCartProducts.length; i++) {
      if (currentCartProducts[i].id == prodId) {
        isExist = true;
      }
    }
    return isExist;
  }

  updateQuantityOfProduct(prodId : number, qty : number){
    let cartValue = 0;
    let currentCartProducts = this.cartProducts.getValue() as any[];
    for (let i = 0; i < currentCartProducts.length; i++) {
      if (currentCartProducts[i].id == prodId) {
        currentCartProducts[i].qty = currentCartProducts[i].qty + qty;
      }
    }
    currentCartProducts.forEach(p => {
      cartValue = cartValue + (p.qty * p.price);
    });
    this.cartTotValue.next(cartValue);
    this.cartCount.next(currentCartProducts.length);
    this.cartProducts.next(currentCartProducts);
    this.setLocalStoreCart(currentCartProducts);
  }

  removeQuantityOfProduct(prodId : number, qty : number){
    let cartValue = 0;
    let currentCartProducts = this.cartProducts.getValue() as any[];
    for (let i = 0; i < currentCartProducts.length; i++) {
      if (currentCartProducts[i].id == prodId) {
        if(currentCartProducts[i].qty > qty){
          currentCartProducts[i].qty = currentCartProducts[i].qty - qty;
        }
      }
    }
    currentCartProducts.forEach(p => {
      cartValue = cartValue + (p.qty * p.price);
    });
    this.cartTotValue.next(cartValue);
    this.cartCount.next(currentCartProducts.length);
    this.cartProducts.next(currentCartProducts);
    this.setLocalStoreCart(currentCartProducts);
  }

  setCartProducts(product: any): void {
    //console.log("setCartProducts",product);
    let currentCartProducts = this.cartProducts.getValue() as any[];
    let isExist = false;
    currentCartProducts.forEach(p => {
      if(p.id==product.id){
        p.qty += 1;
        //p.qty = product.qty && (product.qty > 1) ? (product.qty + p.qty) : (p.qty + 1); //p.qty + 1;
        isExist = true;
      }
    });
    if(!isExist){
      product.qty = product.qty > 1 ? product.qty : 1;
      currentCartProducts.push(product);
    }
    let cartValue = 0;
    currentCartProducts.forEach(p => {
      cartValue = cartValue + (p.qty * p.price);
    });
    this.cartTotValue.next(cartValue);
    this.cartCount.next(currentCartProducts.length);
    this.cartProducts.next(currentCartProducts);
    this.setLocalStoreCart(currentCartProducts);
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
    this.setLocalStoreCart(currentCartProducts);
  }

  emptyCart() : void{
    this.cartTotValue.next(0);
    this.cartCount.next(0);
    this.cartProducts.next([]);
    localStorage.removeItem("cart");
  }
}
