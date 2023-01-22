import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent implements OnInit {

  @Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text:string = 'Submit';
  @Input()
  bgColor = '#000000';
  @Input()
  color ='white';
  @Input()
  fontSizeRem = 1.3;
  @Input()
  widthRem = 10;
  @Output()
  onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
