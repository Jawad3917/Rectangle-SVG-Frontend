import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perimeter-display',
  templateUrl: './perimeter-display.component.html',
  styleUrls: ['./perimeter-display.component.css']
})
export class PerimeterDisplayComponent implements OnInit {
  @Input() perimeter: number = 0;

  constructor() { }

  ngOnInit(): void {
    debugger
  }

}