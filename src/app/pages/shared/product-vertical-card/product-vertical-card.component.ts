import { CartService } from './../../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-vertical-card',
  templateUrl: './product-vertical-card.component.html',
  styleUrls: ['./product-vertical-card.component.css']
})
export class ProductVerticalCardComponent implements OnInit {

  @Input() product: any;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }


  addToCart(product : any) {
    this._cartService.setCartProducts(product);
  }

}
