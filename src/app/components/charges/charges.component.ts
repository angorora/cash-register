import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  constructor() { }
  @Input()
  charges;

  ngOnInit() {
  }

}
