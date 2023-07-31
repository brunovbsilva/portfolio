import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() header: string = '';
  @ContentChildren(ProjectComponent) projects?: QueryList<ProjectComponent>;
  constructor() {}
}
