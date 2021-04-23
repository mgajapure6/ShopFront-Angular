import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-horizontal-card',
  templateUrl: './product-horizontal-card.component.html',
  styleUrls: ['./product-horizontal-card.component.css']
})
export class ProductHorizontalCardComponent implements OnInit {

  product : any;

  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
  }

  addToCart(prodId){

  }

}
