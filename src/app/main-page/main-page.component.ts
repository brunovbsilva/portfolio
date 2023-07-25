import { Component } from '@angular/core';
import { Project } from './projects/model/project.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  private loremFull = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  private loremTitle = 'Lorem Ipsum is simply';
  private tooltipCode = 'View code';
  private tooltipOpen = 'Open in new tab';

  public projects: Project[] = [
    {
      name: this.loremTitle,
      description: this.loremFull,
      imagePath: 'assets/svgs/angular.svg',
      buttons: [
        { type: 'code', link: '', tooltip: this.tooltipCode },
        { type: 'open_in_new', link: '', tooltip: this.tooltipOpen },
      ]
    },
    {
      name: this.loremTitle,
      description: this.loremFull,
      imagePath: 'assets/svgs/csharp.svg',
      buttons: [
        { type: 'code', link: '', tooltip: this.tooltipCode },
        { type: 'open_in_new', link: '', tooltip: this.tooltipOpen },
      ]
    },
    {
      name: this.loremTitle,
      description: this.loremFull,
      imagePath: 'assets/svgs/azure.svg',
      buttons: [
        { type: 'code', link: '', tooltip: this.tooltipCode },
        { type: 'open_in_new', link: '', tooltip: this.tooltipOpen },
      ]
    },
  ]
}
