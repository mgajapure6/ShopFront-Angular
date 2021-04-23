export interface Product {
    id: number;
    name: string;
    cutPrice: number
    price: number;
    rating: number;
    category: string;
    subCategory: string
    images: string[];

    // constructor(id: number, name: string, cutPrice: number,
    //     price: number, rating: number, category: string,
    //     subCategory: string, images: string[]) {
    //     this.id = id;
    //     this.name = name;
    //     this.cutPrice = cutPrice;
    //     this.price = price;
    //     this.rating = rating;
    //     this.category = category;
    //     this.subCategory = subCategory;
    //     this.images = images;
    // }
}