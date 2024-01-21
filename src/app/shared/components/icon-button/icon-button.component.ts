import { Component, Input } from '@angular/core';
import { IIconButton } from './interfaces/icon-button.interface';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() button!: IIconButton;
}
