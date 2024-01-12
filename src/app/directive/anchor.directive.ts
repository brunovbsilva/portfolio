import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective {

  @Input() goTo: string = '';

  constructor() { }

  @HostListener('click', ['$event']) onClick($event: any) {
    this.anchor(this.goTo);
  }

  public anchor(elementId: string): void {
    (document.getElementById(elementId) as HTMLElement)
      .scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
