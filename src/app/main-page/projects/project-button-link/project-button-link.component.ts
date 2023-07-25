import { Component, Input } from '@angular/core';
import { ProjectButtonLink } from '../model/project.model';

@Component({
  selector: 'app-project-button-link',
  templateUrl: './project-button-link.component.html',
  styleUrls: ['./project-button-link.component.scss']
})
export class ProjectButtonLinkComponent {
  @Input() model!: ProjectButtonLink;
}
