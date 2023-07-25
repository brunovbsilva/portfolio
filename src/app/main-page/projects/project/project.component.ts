import { Component, ContentChildren, Input, QueryList} from '@angular/core';
import { ProjectButtonLinkComponent } from '../project-button-link/project-button-link.component';
import { Project } from '../model/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() model!: Project;
  @ContentChildren(ProjectButtonLinkComponent) projectButtonLinks?: QueryList<ProjectButtonLinkComponent>;
}
