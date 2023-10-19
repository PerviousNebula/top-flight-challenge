import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count = 0;
  @Input() disableAdd = false;
  @Input() disableSubs = false;
  @Output() counterUpd = new EventEmitter<number>();

  handleCounter(value: number): void {
    this.count = this.count + value;
    this.counterUpd.emit(this.count);
  }
}
