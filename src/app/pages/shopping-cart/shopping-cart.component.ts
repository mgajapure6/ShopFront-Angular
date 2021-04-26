import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts : any = [];
  cartProductCount : number;
  cartTotValue : number;

  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
    this._cartService.getCartProducts().subscribe(pList=>{
      if(pList.length){
        this.cartProducts = pList;
      }
    });
    this._cartService.getCartTotalValue().subscribe(v=>{
      this.cartTotValue = v;
    });
    this._cartService.getCartCount().subscribe(c=>{
      this.cartProductCount = c;
    });
  }

  removeFromCart(p : any, el){
    this._cartService.removeCartProduct(p.id);
  }

  addQuantity(p:any, el){
    //p.qty = p.qty + 1;
    this._cartService.updateQuantityOfProduct(p.id,1);
  }

  reduceQuantity(p: any, el){
    if(p.qty > 1){
      //p.qty = p.qty - 1;
      this._cartService.removeQuantityOfProduct(p.id,1);
    }
  }

}
