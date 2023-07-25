import { Component, ContentChildren, QueryList } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @ContentChildren(ProjectComponent) projects?: QueryList<ProjectComponent>;

  constructor() {}
}
