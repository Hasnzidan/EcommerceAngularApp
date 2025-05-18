import { Component } from '@angular/core';
import { ICategorie } from '../../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedCategoryid: number = 0;
  categories: ICategorie[]
  constructor(){
    this.categories = [
      {
        id: 1,
        name: 'Laptops'
      },
      {
        id: 2,
        name: 'Printers'
      },
      {
        id: 3,
        name: 'Tablets'
      }
    ];
  }

}
