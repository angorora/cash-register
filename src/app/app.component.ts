import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cash-register';
  digit = "";
  cancel =false;
  add =false;
  charges = []
  onPress(num: string) {
    this.digit = this.digit + num;
  }

  cancelPress(num) {
    this.digit = this.digit.slice(0,this.digit.length-1)
  }

  addPress(num: boolean) {
    this.charges.push(this.digit);
    this.digit = "";
  }
}
