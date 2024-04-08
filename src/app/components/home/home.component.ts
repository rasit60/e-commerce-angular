import { Component } from '@angular/core';
import { CategoryModel } from '../../models/category.models';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from '../../pipes/category.pipe';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product.model';
import { ProductPipe } from "../../pipes/product.pipe";
import { SearchComponent } from '../../common/components/search/search.component';
import { TrCurrencyPipe } from 'tr-currency';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [FormsModule, CategoryPipe, CommonModule, ProductPipe, SearchComponent, TrCurrencyPipe,]
})
export class HomeComponent {
  categories: CategoryModel[] = [];
  numbers: number[] = [1,2,3,4]
  categorySearch: string = ""
  selectedCategoryId: string = ""
  productSearch: string = ""
  constructor(public cart: ShoppingCartService, public _product: ProductService) {
    setTimeout(() => {
      this.seedData();
    }, 3000);
  }

  seedData() {
    this.categories = [
      {
        id: "1",
        name: "Elektronik"
      },
      {
        id: "2",
        name: "Meyve & Sebze"
      },
      {
        id: "3",
        name: "Kıyafet"
      }


    ]
  };

  selectCategory(id: string) {
    this.selectedCategoryId = id;
  }

  decrementProductQuantity(product: ProductModel) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  incrementProductQuantity(product: ProductModel) {
    if (product.stock > product.quantity) {
      product.quantity++;
    }

  }

  addShopingCart(product: ProductModel) {
    const productModel = { ...product }
    const model = this.cart.shoppingCarts.find((p) => p.id === product.id);
    if (model === undefined) {
      this.cart.shoppingCarts.push(productModel);
    } else {
      model.quantity += productModel.quantity;
    }

    product.stock -= product.quantity;
  }


}
