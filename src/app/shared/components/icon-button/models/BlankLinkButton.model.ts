import { IIconButton } from "../interfaces/icon-button.interface";

export class BlankLinkButton implements IIconButton {
  icon: string;
  link: string;
  tooltip: string;

  constructor(icon: string, link: string, tooltip: string) {
    this.icon = icon;
    this.link = link;
    this.tooltip = tooltip;
  }

  onClick(): void {
    window.open(this.link, '_blank');
  }

}