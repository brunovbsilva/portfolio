import { Component } from '@angular/core';
import { Project } from './projects/model/project.model';
import { Skill } from './hard-skills/model/skill.model';
import { Job } from './experience/job/model/job.model';
import { ApresentationButton } from './apresentation/apresentation-button/model/apresentation-button.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor() {}

  public apresentationLinks: ApresentationButton[] = [
    { type: 'link', name: 'linkedin', value: 'https://www.linkedin.com/in/bruno-vinicius-346b77163/', svgIcon: 'linkedin' },
    { type: 'link', name: 'github', value: 'https://github.com/brunovbsilva', svgIcon: 'github' },
    { type: 'copy', name: 'discord', value: 'sonynz', svgIcon: 'discord' },
    { type: 'copy', name: 'email', value: 'brunovinicius0704@gmail.com', svgIcon: 'email'}
  ]

  public jobs: Job[] = [
    {
      position: 'experience.portway.position',
      company: 'experience.portway.name',
      description: 'experience.portway.description',
      startDate: new Date(2020, 10, 1),
      endDate: new Date(2022, 7, 1),
      skills: ['C#', 'Angular', 'Ionic', 'Git', 'SQL Server']
    },
    {
      position: 'experience.stefanini.position',
      company: 'experience.stefanini.name',
      description: 'experience.stefanini.description',
      startDate: new Date(2022, 8, 1),
      skills: ['C#', 'Angular', 'Git', 'SQL Server', 'Azure']
    },
  ]

  public skills: Skill[] = [
    { name: 'C#', icon: 'csharp' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Git', icon: 'git' },
    { name: 'SQL Server', icon: 'sql-server' },
    { name: 'Azure', icon: 'azure' },
    { name: 'Ionic', icon: 'ionic' },
  ]

  public projects: Project[] = [
    {
      name: 'portifolio',
      imagePath: 'assets/images/portifolio.png',
      buttons: [
        { type: 'code', link: 'https://github.com/brunovbsilva/portifolio', tooltip: 'projects.view-code' },
        { type: 'open_in_new', link: 'https://brunovbsilva.github.io/portifolio/', tooltip: 'projects.open' },
      ]
    },
    { name: 'under-construction', loading: true },
  ]
}
