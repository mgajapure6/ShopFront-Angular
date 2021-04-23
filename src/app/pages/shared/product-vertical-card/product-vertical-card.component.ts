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

  featuredProducts: any = [];

  constructor(private _productService: ProductService,
    private _cartService: CartService) { }

  ngOnInit(): void {
    this.featuredProducts = this._productService.getFeaturedProducts();
  }


  addToCart(prodId) {
    console.log("click");
    this.featuredProducts.forEach(p => {
      if (p.id == prodId) {
        p.qty = 1;
        this._cartService.setCartProducts(p);
      }
    });
  }

}
