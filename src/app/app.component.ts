import { products, Product } from './data';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
//@ts-ignore
export class AppComponent {
  productList: Product[] = products;
  category: string | null = null;
  totalCash: number = 500;
  cashError: boolean = false;
  cart: string[] = [];
}
