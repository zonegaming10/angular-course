import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
//@ts-ignore
export class CounterComponent {
  //@ts-ignore
  @Input() counter: number;
  //@ts-ignore
  @Output() counterChange = new EventEmitter();
  constructor() {}
  onIncrease() {
    this.counterChange.emit(this.counter++);
  }
}
