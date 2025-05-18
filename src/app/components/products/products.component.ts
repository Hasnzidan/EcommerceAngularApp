import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategorie } from '../../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
  totalOrderPrice: number = 0;
  products: IProduct[]
  filteredProducts: IProduct[];
 @Input() recievedCategoryId: number = 0
  constructor() {
    this.products = [
      {
        id: 1,
        name: '6D-Gaming-Mouse',
        price: 23400,
        Quantity: 1,
        imageUrl: 'Products/6D-Gaming-Mouse.jpg',
        categoryId: 1
      },
      {
        id: 2,
        name: 'hp-pavilion-gaming-laptop',
        price: 22200,
        Quantity: 3,
        imageUrl: 'Products/hp-pavilion.jpg',
        categoryId: 1
      },
      {
        id: 3,
        name: 'Dell-G15-Gaming-Laptop',
        price: 31100,
        Quantity: 2,
        imageUrl: 'Products/Dell-G15.jpg',
        categoryId: 1
      },
      {
        id: 4,
        name: 'Asus-Rog-Gaming-Laptop',
        price: 33300,
        Quantity: 2,
        imageUrl: 'Products/Asus-Rog.jpg',
        categoryId: 1
      },
      {
        id: 5,
        name: 'Asus-Gaming-Laptop',
        price: 31200,
        Quantity: 2,
        imageUrl: 'Products/Asus.jpg',
        categoryId: 1
      },
      {
        id: 6,
        name: 'Lenovo-Gaming-Laptop',
        price: 32100,
        Quantity: 0,
        imageUrl: 'Products/Lenovo.jpg',
        categoryId: 1
      },
      {
        id: 7,
        name: 'photo-printer',
        price: 3100,
        Quantity: 2,
        imageUrl: 'Products/Printer.jpg',
        categoryId: 2
      },
      {
        id: 8,
        name: 'Tablet',
        price: 3300,
        Quantity: 2,
        imageUrl: 'Products/Tablet.jpg',
        categoryId: 3
      }
    ];
    this.filteredProducts = this.products
  }
  ngOnChanges() {
    this.filterProduct()
  }

  filterProduct() {
    if (this.recievedCategoryId == 0) {
      this.filteredProducts = this.products
    } else {
      this.filteredProducts = this.products.filter((product) => product.categoryId == this.recievedCategoryId)
    }
  }


}
