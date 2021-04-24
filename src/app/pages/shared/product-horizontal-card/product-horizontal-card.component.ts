import { CartService } from './../../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-horizontal-card',
  templateUrl: './product-horizontal-card.component.html',
  styleUrls: ['./product-horizontal-card.component.css']
})
export class ProductHorizontalCardComponent implements OnInit {

  @Input() product: any;

  

  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
  }

  addToCart(product : any){
    this._cartService.setCartProducts(product);
  }

}
