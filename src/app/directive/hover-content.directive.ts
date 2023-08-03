import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHoverContent]'
})
export class HoverContentDirective {
  @Output() isHover: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onHover(event: MouseEvent) {
    const direction = event.type === 'mouseenter' ? 'in' : 'out';
    this.isHover.emit(direction);
  }

}
