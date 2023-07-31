import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { JobComponent } from './job/job.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() header: string = '';
  @ContentChildren(JobComponent) jobs?: QueryList<JobComponent>;
}
