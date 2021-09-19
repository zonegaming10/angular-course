import { Book } from './../data';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
//@ts-ignore
export class BookCardComponent {
  //@ts-ignore
  @Input() book: Book;
  //@ts-ignore
  @Output('added') bookAdded = new EventEmitter<Book>();
  constructor() {}
  addedBook() {
    this.bookAdded.emit(this.book);
  }
}
