import { Component } from '@angular/core';
import { Skill } from './skill/model/skill.model';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', icon: 'angular' },
    { name: 'Azure', icon: 'azure' },
    { name: 'Git', icon: 'git' },
    { name: 'C#', icon: 'csharp' },
    { name: 'Ionic', icon: 'ionic' },
    { name: 'SQL Server', icon: 'sql-server' },
    { name: 'mock', icon: 'test' },
    { name: 'mock', icon: 'test' },
    { name: 'mock', icon: 'test' }
  ]
}
