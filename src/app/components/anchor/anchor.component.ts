import { Component, Input } from '@angular/core';
import { HoverContentAnimations } from 'src/app/animations/hover-content.animation';
import { spinAnimations } from 'src/app/animations/spin.animations';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss'],
  animations: [HoverContentAnimations, spinAnimations]
})
export class AnchorComponent {
  public state: string = '';
  @Input() public showAnchor: boolean = false;
}
