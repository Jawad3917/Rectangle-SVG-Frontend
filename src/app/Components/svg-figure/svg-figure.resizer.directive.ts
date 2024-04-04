import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSvgResizer]'
})
export class SvgResizerDirective {
  constructor(private el: ElementRef) { }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Handle mouse move for resizing
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    // Handle mouse up to end resizing
  }
}
