import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = []

  constructor( ) {
    setTimeout(() => {
      this.seedData();
    }, 3000);
   }

  seedData(){
    this.products=[
      {
        id: "1",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFFXV4zCJybOFvocqAKKkko37SsPbl9F66Q&usqp=CA",
        name: "Grundig Pc 2560 B1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 12650,
        discountedPrice: 11999,
        stock: 5,
        kdvRate: 20,
        categoryId: "1",
        category: {
          id: "1",
          name: "Elektronik"
        },
        quantity: 2
      },
      {
        id: "2",
        imageUrl: "https://m.media-amazon.com/images/I/61ujQL9JflL._AC_SX679_.jpg",
        name: "Columbia Delta Ridge™ Down Erkek Mont",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 11550,
        discountedPrice: 10999,
        stock: 10,
        kdvRate: 20,
        categoryId: "3",
        category: {
          id: "3",
          name: "Kıyafet"
        },
        quantity: 5
      }
  

    ]
  }

}
