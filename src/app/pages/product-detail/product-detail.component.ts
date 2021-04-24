import { ScriptService } from './../../services/script.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product_id: number;

  product: any;

  relatedProducts: any = [];

  @ViewChild('pQty') qty: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private _cartService: CartService,
    private _scriptService: ScriptService
  ) {}

  ngOnInit(): void {
    console.log("ngOnInit app.pd");
    this._scriptService.loadScripts();
    this.route.params.subscribe((params) => {
      this.product_id = +params['product-id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      if (!this.product_id) {
        this.product_id = 0;
      }
      this.product = this._productService.getProductByProductId(
        this.product_id
      );
    });

    this.relatedProducts = this._productService.getRelatedProducts();
  }

  addToCart(product: any) {
    let qqty = +this.qty.nativeElement.value;
    if (qqty == 0) {
      this.qty.nativeElement.value = 1;
      qqty = 1;
    }
    if (this._cartService.isProductExist(product.id)) {
      this._cartService.updateQuantityOfProduct(product.id,qqty);
    } else {
      product.qty = qqty;
      this._cartService.setCartProducts(product);
    }
  }
}
