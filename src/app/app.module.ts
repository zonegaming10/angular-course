import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { BookCardComponent } from './book-card/book-card.component';
import { CounterComponent } from './counter/counter.component';
@NgModule({
  declarations: [AppComponent, NavComponent, BookCardComponent, CounterComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
//@ts-ignore
export class AppModule {}
