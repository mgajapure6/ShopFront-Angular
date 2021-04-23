import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css']
})
export class CartPopupComponent implements OnInit {

  cartProducts: any = [];

  subTotal: number;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getCartProducts().subscribe(
      products => {
        console.log("products from cartpopup", products);
        if (products.length > 0) {
          this.cartProducts = products;
        }
      }
    );
    this._cartService.getCartTotalValue().subscribe(
      val => { 
        console.log("subtot",val);
        this.subTotal = val 
    });
  }

}
