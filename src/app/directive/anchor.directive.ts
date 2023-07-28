import { ViewportScroller } from '@angular/common';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective {

  @Input() goTo: string = '';

  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('click', ['$event']) onClick($event: any) {
    this.anchor(this.goTo);
  }

  public anchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
