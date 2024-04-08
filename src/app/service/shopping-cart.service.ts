import { Injectable } from '@angular/core';
import { shoppingCartModel } from '../models/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCarts: shoppingCartModel[] = [
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
    }
  ];


  constructor() { }









}
