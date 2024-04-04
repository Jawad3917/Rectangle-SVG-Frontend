import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-svg-figure',
  templateUrl: './svg-figure.component.html',
  styleUrls: ['./svg-figure.component.css']
})
export class SvgFigureComponent implements OnInit {
  @ViewChild('rectangle') rectangle!: ElementRef<SVGRectElement>;

  width: number = 500;
  height: number = 250;
  perimeter: number = 0;
  startX: number = 0;
  startY: number = 0;
  isResizing: boolean = false;

  constructor(private http: HttpClient, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadInitialDimensions();
    this.addMouseUpListener(); // Add listener for mouseup event on document body
  }

  loadInitialDimensions() {
    this.http.get<any>('assets/figure-dimensions.json').subscribe(data => {
      this.width = data.width;
      this.height = data.height;
      this.calculatePerimeter();
    });
  }

  calculatePerimeter() {
    this.perimeter = 2 * (this.width + this.height);
  }

  onMouseDown(event: MouseEvent) {
    event.preventDefault(); // Prevent default action for smoother dragging
    const boundingRect = this.rectangle.nativeElement.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;

    if (offsetX >= 0 && offsetX <= boundingRect.width && offsetY >= 0 && offsetY <= boundingRect.height) {
      this.isResizing = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.setCursor('col-resize'); // Set cursor style to col-resize
    } else {
      this.stopResizing();
    }
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isResizing) return;

    const dx = event.clientX - this.startX;
    const dy = event.clientY - this.startY;

    this.width += dx;
    this.height += dy;

    this.startX = event.clientX;
    this.startY = event.clientY;

    this.updateDimensions();
    console.log(`width: ${this.width}   ----  height: ${this.height}   `);
  }

  onMouseUp(event: MouseEvent) {
    this.stopResizing();
  }

  updateDimensions() {
    this.renderer.setAttribute(this.rectangle.nativeElement, 'width', String(this.width));
    this.renderer.setAttribute(this.rectangle.nativeElement, 'height', String(this.height));
    this.calculatePerimeter();
  }

  setCursor(cursor: string) {
    this.renderer.setStyle(document.body, 'cursor', cursor);
  }

  stopResizing() {
    this.isResizing = false;
    this.setCursor('auto'); // Reset cursor style to default
  }

  addMouseUpListener() {
    this.renderer.listen('document', 'mouseup', () => {
      this.stopResizing();
    });
  }
}