import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product_list: any = [];

  constructor() {
    for(let i = 0; i<17;i++){
      let p = {
        id: (i+1),
        name: 'Product '+(i+1),
        cutPrice: i*i+(100),
        price: i*i+(55),
        rating: 4,
        category: 'Electricals '+(i+1),
        categoryId: (i+1),
        desc:
          'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        subCategory: 'Batteries '+(i+1),
        subCategoryId: (i+1),
        images: ['assets/images/demos/demo3/products/'+(i+1)+'.jpg',
        'assets/images/demos/demo3/products/2.jpg',
        'assets/images/demos/demo3/products/3.jpg',
        'assets/images/demos/demo3/products/4.jpg'],
        reviews : [
          {
            username : "User "+(i+1),
            comment : "Very Good Product. Fast Delivery.",
            rating : 4,
            time : (i+1)+"/10/2020"
          },
          {
            username : "User "+(i+1),
            comment : "Nice product",
            rating : 3,
            time : (i+1)+"/11/2020"
          },
          {
            username : "User "+(i+1),
            comment : "Poor",
            rating : 2,
            time : (i+1)+"/01/2021"
          }
        ]
      };
      this.product_list.push(p);
    }
  }

  getPopularProducts(): Product[] {
    let pList: any = [];
    for (let i = 0; i < 6; i++) {
      pList.push(this.product_list[i]);
    }
    return pList;
  }

  getFeaturedProducts(): Product[] {
    let pList: any = [];
    for (let i = 0; i < 8; i++) {
      pList.push(this.product_list[i]);
    }
    return pList;
  }

  getSalesProducts(): Product[] {
    let pList: any = [];
    for (let i = 0; i < 3; i++) {
      pList.push(this.product_list[i]);
    }
    return pList;
  }

  getLatestProducts(): Product[] {
    let pList: any = [];
    for (let i = 0; i < 3; i++) {
      pList.push(this.product_list[i]);
    }
    return pList;
  }

  getBestOfWeekProducts(): Product[] {
    let pList: any = [];
    for (let i = 0; i < 3; i++) {
      pList.push(this.product_list[i]);
    }
    return pList;
  }

  getRelatedProducts(): Product[]{
    let pList: any = [];
    for (let i = 0; i < 5; i++) {
      pList.push(this.product_list[i]);
    }
    return pList;
  }

  getProductListByCategory(category_id: number): any[] {
    let pList: any = [];
    if (category_id == 0) {
      return this.product_list;
    } else {
      for (let i = 0; i < this.product_list.length; i++) {
        if (category_id == this.product_list[i].categoryId) {
          pList.push(this.product_list[i]);
        }
      }
      return pList;
    }
  }

  getProductByProductId(prodId: number): any {
    let product: any = null;
    for (let i = 0; i < this.product_list.length; i++) {
      if (prodId == this.product_list[i].id) {
        product = this.product_list[i];
      }
    }
    return product;
  }

  getLimitedProducts(limit : number){
    let plist : any = [];
    for(let i=0; i< limit;i++){
      plist.push(this.product_list[i]);
    }
    return plist;
  }
}
