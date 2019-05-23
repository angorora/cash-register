import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { ChargesComponent } from '../charges/charges.component';

@Component({
  selector: 'screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  @Input()
  digit: string

  @Input()
  cancel: string

  charge = "";
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log("yes")
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (propName == 'digit')
        this.charge = this.charge + changedProp.currentValue;
    }
  }

}
