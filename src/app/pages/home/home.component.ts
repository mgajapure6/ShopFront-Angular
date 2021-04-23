import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts: any = [];
  popularProductCol1: any = [];
  popularProductCol2: any = [];

  featuredProducts: any = [];

  salesProducts: any = [];
  latestProducts: any = [];
  bestOfWeekProducts: any = [];


  constructor(private _productService: ProductService,
  private _cartService : CartService) { }

  ngOnInit(): void {
    this.popularProducts = this._productService.getPopularProducts();
    for (let i = 0; i < this.popularProducts.length; i++) {
      let p = this.popularProducts[i] as Product;
      if (i < 3) {
        this.popularProductCol1.push(p);
      } else {
        this.popularProductCol2.push(p);
      }
    }

    this.featuredProducts = this._productService.getFeaturedProducts();
    this.salesProducts = this._productService.getSalesProducts();
    this.latestProducts = this._productService.getLatestProducts();
    this.bestOfWeekProducts = this._productService.getBestOfWeekProducts();
  }


}
