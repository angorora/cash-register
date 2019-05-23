import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  constructor() { }
@Input()
  num:string
  @Input()
  add:boolean = false;
  @Input()
  cancel:boolean = false;

  @Output()
  press = new EventEmitter<string>()
  @Output()
  cancelPress = new EventEmitter<boolean>()
  @Output()
  addPress = new EventEmitter<boolean>()

  ngOnInit() {

  }
   
  onPress(num){
    if(this.add)
    this.addPress.emit(true);
    else if(this.cancel)
    this.cancelPress.emit(true);
    else
    this.press.emit(num);
  }
}
