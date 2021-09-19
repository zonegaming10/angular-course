import { books, Book } from './data';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
//@ts-ignore
export class AppComponent {
  public bookList: Book[] = books;
  public boughtBooks: number = 0;
  //two way binding
  //local reference
  onAddToCart(book: Book) {
    alert(
      `The book ${book.title} has been added with the price ${book.price}$`
    );
  }
  onCounterChange() {
    this.boughtBooks++;
  }
}
