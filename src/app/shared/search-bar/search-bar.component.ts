import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  cartCount : number;
  cartValue : number;

  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
    this._cartService.getCartCount().subscribe(val=>{this.cartCount = val});
    this._cartService.getCartTotalValue().subscribe(val=>{this.cartValue = val});;
  }

}
