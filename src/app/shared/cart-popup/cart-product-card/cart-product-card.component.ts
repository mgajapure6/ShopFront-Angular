import { CartService } from './../../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.css']
})
export class CartProductCardComponent implements OnInit {

  @Input() product: any;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(prodId: number) {
    this._cartService.removeCartProduct(prodId);
  }

}
