import { Component } from '@angular/core';
import { Project } from './projects/model/project.model';
import { Skill } from './hard-skills/model/skill.model';
import { Job } from './experience/job/model/job.model';
import { ApresentationButton } from './apresentation/apresentation-button/model/apresentation-button.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public loremFull = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  private loremTitle = 'Lorem Ipsum is simply';
  private tooltipCode = 'View code';
  private tooltipOpen = 'Open in new tab';

  public apresentationLinks: ApresentationButton[] = [
    { type: 'link', name: 'linkedin', value: 'https://www.linkedin.com/in/bruno-vinicius-346b77163/', svgIcon: 'linkedin' },
    { type: 'link', name: 'github', value: 'https://github.com/brunovbsilva', svgIcon: 'github' },
    { type: 'copy', name: 'discord', value: 'sonynz', svgIcon: 'discord' },
    { type: 'copy', name: 'email', value: 'brunovinicius0704@gmail.com', svgIcon: 'email'}
  ]

  public jobs: Job[] = [
    {
      position: 'Software Engineer',
      company: 'Company 1',
      description: this.loremFull,
      startDate: new Date(2020, 10, 1),
      endDate: new Date(2021, 10, 1),
      skills: ['Angular', 'Git', 'C#', 'Ionic', 'SQL Server']
    },
    {
      position: 'Software Engineer',
      company: 'Company 2',
      description: this.loremFull,
      startDate: new Date(2020, 10, 1),
      endDate: new Date(2022, 10, 1),
      skills: ['Angular', 'Azure', 'Git', 'C#', 'SQL Server']
    },
    {
      position: 'Software Engineer',
      company: 'Company 3',
      description: this.loremFull,
      startDate: new Date(2020, 10, 1),
      endDate: new Date(2023, 10, 1),
      skills: ['Angular', 'Azure', 'Git', 'C#', 'SQL Server']
    },
  ]

  public skills: Skill[] = [
    { name: 'Angular', icon: 'angular' },
    { name: 'Azure', icon: 'azure' },
    { name: 'Git', icon: 'git' },
    { name: 'C#', icon: 'csharp' },
    { name: 'Ionic', icon: 'ionic' },
    { name: 'SQL Server', icon: 'sql-server' },
    { name: 'C#', icon: 'csharp' },
    { name: 'Ionic', icon: 'ionic' },
    { name: 'SQL Server', icon: 'sql-server' },
  ]

  public projects: Project[] = [
    {
      name: this.loremTitle,
      description: this.loremFull,
      imagePath: 'assets/svgs/angular.svg',
      buttons: [
        { type: 'code', link: 'https://www.google.com.br/', tooltip: this.tooltipCode },
        { type: 'open_in_new', link: 'https://www.google.com.br/', tooltip: this.tooltipOpen },
      ]
    },
    {
      name: this.loremTitle,
      description: this.loremFull,
      imagePath: 'assets/svgs/csharp.svg',
      buttons: [
        { type: 'code', link: 'https://www.google.com.br/', tooltip: this.tooltipCode },
        { type: 'open_in_new', link: 'https://www.google.com.br/', tooltip: this.tooltipOpen },
      ]
    },
    {
      name: this.loremTitle,
      description: this.loremFull,
      imagePath: 'assets/svgs/azure.svg',
      buttons: [
        { type: 'code', link: 'https://www.google.com.br/', tooltip: this.tooltipCode },
        { type: 'open_in_new', link: 'https://www.google.com.br/', tooltip: this.tooltipOpen },
      ]
    },
  ]
}
