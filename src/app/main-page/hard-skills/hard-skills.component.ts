import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { Skill } from './model/skill.model';
import { DescriptionComponent } from './description/description.component';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent {
  @ContentChild(DescriptionComponent) description!: DescriptionComponent;
  @ContentChildren(SkillComponent) skills!: QueryList<SkillComponent>;
}
