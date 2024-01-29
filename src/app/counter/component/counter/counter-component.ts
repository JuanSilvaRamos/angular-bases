import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: 'counter-component.html'
})
//template: `<h2>Hello Counter</h2>`

export class CounterComponent {

  public counter: number = 10;

  counterBy( value: number ): void {
    this.counter += value;
  }

  resetBy(): void {
    this.counter = 10;
  }


}
