import { ScriptService } from './../../services/script.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  category_id: number;
  productList: any[] = [];

  isListView : boolean = false;

  constructor(private route: ActivatedRoute,
    private _productService : ProductService,
    private _scriptService: ScriptService) {}

  ngOnInit(): void {
    console.log("ngOnInit app.pl");
    this._scriptService.loadScripts();
    this.route.params.subscribe((params) => {
      this.category_id = +params['category-id']; // (+) converts string 'id' to a number
      if(!this.category_id){
        this.category_id = 0;
      }
      this.productList = this._productService.getProductListByCategory(this.category_id);
    });
    
  }

  
  toListView(){
    this.isListView = true;
  }

  toGridView(){
    this.isListView = false;
  }
}
