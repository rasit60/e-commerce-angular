import { Component } from '@angular/core';
import { CategoryModel } from '../../models/category.models';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from '../../pipes/category.pipe';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CategoryPipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: CategoryModel[] = [
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
  ];

  products: ProductModel[] = [
    {
      id: "1",
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFFXV4zCJybOFvocqAKKkko37SsPbl9F66Q&usqp=CAU',
      name:'grunding pc',
      description:"lorem ipsusu felna fırt",
      price:12650,
      discountedPrice: 11999,
      stock:100,
      kdvRate:20,
      categoryId:"1",
      category:{
        id:"1",
        name:"Elektronik"
      }

}
  ]

  categorySearch: string = ""
  selectedCategoryId: string = ""


  selectCategory(id: string) {
    this.selectedCategoryId = id;
  }





}
