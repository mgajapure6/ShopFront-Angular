import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product_list: any = [
    {
      id: 1,
      name: 'Hand Electric Cell',
      cutPrice: 50,
      price: 30,
      rating: 4,
      category: 'Electricals',
      categoryId: 1,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Batteries',
      images: ['assets/images/demos/demo3/products/1.jpg'],
    },
    {
      id: 2,
      name: "Men's Fashion Hood",
      cutPrice: 700,
      price: 300,
      rating: 4.5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Mens',
      images: ['assets/images/demos/demo3/products/2.jpg'],
    },
    {
      id: 3,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/3.jpg'],
    },
    {
      id: 4,
      name: 'Hand Electric Cell',
      cutPrice: 50,
      price: 30,
      rating: 4,
      category: 'Electricals',
      categoryId: 1,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Batteries',
      images: ['assets/images/demos/demo3/products/4.jpg'],
    },
    {
      id: 5,
      name: "Men's Fashion Hood",
      cutPrice: 700,
      price: 300,
      rating: 4.5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Mens',
      images: ['assets/images/demos/demo3/products/5.jpg'],
    },
    {
      id: 6,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/6.jpg'],
    },
    {
      id: 7,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/7.jpg'],
    },
    {
      id: 8,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/8.jpg'],
    },
    {
      id: 9,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/9.jpg'],
    },
    {
      id: 10,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/10.jpg'],
    },
    {
      id: 11,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/11.jpg'],
    },
    {
      id: 12,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/12.jpg'],
    },
    {
      id: 13,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/13.jpg'],
    },
    {
      id: 14,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/14.jpg'],
    },
    {
      id: 15,
      name: "Women's Fashion T-shirt",
      cutPrice: 500,
      price: 400,
      rating: 5,
      category: 'Clothing',
      categoryId: 2,
      desc:
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
      subCategory: 'Womens',
      images: ['assets/images/demos/demo3/products/15.jpg'],
    },
  ];

  constructor() {}

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
}
