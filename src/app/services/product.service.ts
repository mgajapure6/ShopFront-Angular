import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getPopularProducts(): Product[] {
    return [
      {
        id: 1,
        name: "Hand Electric Cell",
        cutPrice: 50,
        price: 30,
        rating: 4,
        category: "Electricals",
        subCategory: "Batteries",
        images: ["assets/images/demos/demo3/products/10.jpg"]
      },
      {
        id: 2,
        name: "Men's Fashion Hood",
        cutPrice: 700,
        price: 300,
        rating: 4.5,
        category: "Clothing",
        subCategory: "Mens",
        images: ["assets/images/demos/demo3/products/11.jpg"]
      },
      {
        id: 3,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/12.jpg"]
      },
      {
        id: 4,
        name: "Hand Electric Cell",
        cutPrice: 50,
        price: 30,
        rating: 4,
        category: "Electricals",
        subCategory: "Batteries",
        images: ["assets/images/demos/demo3/products/10.jpg"]
      },
      {
        id: 5,
        name: "Men's Fashion Hood",
        cutPrice: 700,
        price: 300,
        rating: 4.5,
        category: "Clothing",
        subCategory: "Mens",
        images: ["assets/images/demos/demo3/products/11.jpg"]
      },
      {
        id: 6,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/12.jpg"]
      },
    ];
  }

  getFeaturedProducts(): Product[] {
    return [
      {
        id: 1,
        name: "Hand Electric Cell",
        cutPrice: 50,
        price: 30,
        rating: 4,
        category: "Electricals",
        subCategory: "Batteries",
        images: ["assets/images/demos/demo3/products/1.jpg"]
      },
      {
        id: 2,
        name: "Men's Fashion Hood",
        cutPrice: 700,
        price: 300,
        rating: 4.5,
        category: "Clothing",
        subCategory: "Mens",
        images: ["assets/images/demos/demo3/products/2.jpg"]
      },
      {
        id: 3,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/3.jpg"]
      },
      {
        id: 4,
        name: "Hand Electric Cell",
        cutPrice: 50,
        price: 30,
        rating: 4,
        category: "Electricals",
        subCategory: "Batteries",
        images: ["assets/images/demos/demo3/products/4.jpg"]
      },
      {
        id: 5,
        name: "Men's Fashion Hood",
        cutPrice: 700,
        price: 300,
        rating: 4.5,
        category: "Clothing",
        subCategory: "Mens",
        images: ["assets/images/demos/demo3/products/5.jpg"]
      },
      {
        id: 6,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/6.jpg"]
      },
      {
        id: 7,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/7.jpg"]
      },
      {
        id: 8,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/8.jpg"]
      },
    ];
  }

  getSalesProducts(): Product[] {
    return [
      {
        id: 1,
        name: "Hand Electric Cell",
        cutPrice: 50,
        price: 30,
        rating: 4,
        category: "Electricals",
        subCategory: "Batteries",
        images: ["assets/images/demos/demo3/products/9.jpg"]
      },
      {
        id: 2,
        name: "Men's Fashion Hood",
        cutPrice: 700,
        price: 300,
        rating: 4.5,
        category: "Clothing",
        subCategory: "Mens",
        images: ["assets/images/demos/demo3/products/10.jpg"]
      },
      {
        id: 3,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/11.jpg"]
      }];
  }

  getLatestProducts(): Product[] {
    return [
      {
        id: 1,
        name: "Hand Electric Cell",
        cutPrice: 50,
        price: 30,
        rating: 4,
        category: "Electricals",
        subCategory: "Batteries",
        images: ["assets/images/demos/demo3/products/10.jpg"]
      },
      {
        id: 2,
        name: "Men's Fashion Hood",
        cutPrice: 700,
        price: 300,
        rating: 4.5,
        category: "Clothing",
        subCategory: "Mens",
        images: ["assets/images/demos/demo3/products/11.jpg"]
      },
      {
        id: 3,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/12.jpg"]
      },
    ];
  }

  getBestOfWeekProducts(): Product[] {
    return [
      {
        id: 1,
        name: "Hand Electric Cell",
        cutPrice: 50,
        price: 30,
        rating: 4,
        category: "Electricals",
        subCategory: "Batteries",
        images: ["assets/images/demos/demo3/products/10.jpg"]
      },
      {
        id: 2,
        name: "Men's Fashion Hood",
        cutPrice: 700,
        price: 300,
        rating: 4.5,
        category: "Clothing",
        subCategory: "Mens",
        images: ["assets/images/demos/demo3/products/11.jpg"]
      },
      {
        id: 3,
        name: "Women's Fashion T-shirt",
        cutPrice: 500,
        price: 400,
        rating: 5,
        category: "Clothing",
        subCategory: "Womens",
        images: ["assets/images/demos/demo3/products/12.jpg"]
      },
    ];
  }
}
