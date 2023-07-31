import { Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';
import { HardSkillsModel } from '../models/hard-skills.model';
import { DescriptionComponent } from './description/description.component';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent {
  @Input() header: string = '';
  @ContentChild(DescriptionComponent) description!: DescriptionComponent;
  @ContentChildren(SkillComponent) skills!: QueryList<SkillComponent>;
}
