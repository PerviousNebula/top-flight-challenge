import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter1 = 0;
  counter2 = 0;

  disableSubs = true;
  disableAdd = false;

  reset = false;
  result = 0;

  handleCounter1Value(value: number): void {
    this.counter1 = value;
    this.validateValue();
  }

  handleCounter2Value(value: number): void {
    this.counter2 = value;
    this.validateValue();
  }

  validateValue(): void {
    if (this.counter1 + this.counter2 === 0) {
      this.disableSubs = true;
      this.result = this.counter1 + this.counter2;
      return;
    } else if (this.counter1 + this.counter2 === 20) {
      this.disableAdd = true;
      this.result = this.counter1 + this.counter2;
      return;
    }

    this.disableSubs = false;
    this.disableAdd = false;
    this.result = this.counter1 + this.counter2;
  }

  resetValues(): void {
    this.counter1 = 0;
    this.counter2 = 0;
    this.disableSubs = true;
    this.disableAdd = false;
    this.result = 0;
  }
}
