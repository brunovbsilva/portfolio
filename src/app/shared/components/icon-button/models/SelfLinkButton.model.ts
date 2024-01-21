import { IIconButton } from "../interfaces/icon-button.interface";

export class SelfLinkButton implements IIconButton {
  icon: string;
  link: string;
  tooltip: string;

  constructor(icon: string, link: string, tooltip: string) {
    this.icon = icon;
    this.link = link;
    this.tooltip = tooltip;
  }

  onClick(): void {
    window.location.href = this.link;
  }
}