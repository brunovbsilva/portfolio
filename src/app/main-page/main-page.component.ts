import { Component } from '@angular/core';
import { ProjectsModel } from './models/project.model';
import { HardSkillsModel } from './models/hard-skills.model';
import { ExperienceModel } from './models/experience.model';
import { ApresentationButtonType, ApresentationModel } from './models/apresentation.model';
import { HeaderModel } from './models/header.model';
import { Language } from './models/language.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  private _lang: Language = Language.enUS;
  public get lang() { return this._lang; };
  public set lang(value: Language) {
    this._lang = value;
    this.updateResources();
  }
  public header: HeaderModel;
  public apresentation: ApresentationModel;
  public projects: ProjectsModel;
  public experience: ExperienceModel;
  public hardSkills: HardSkillsModel;

  constructor() {
    this.lang = window.navigator.language == 'pt-BR' ? Language.ptBR : Language.enUS;
    this.header = this.getHeaderResources();
    this.apresentation = this.getApresentationResource();
    this.projects = this.getProjectsResources();
    this.experience = this.getExperienceResources();
    this.hardSkills = this.getHardSkillsResources();
  }

  private updateResources(): void {
    this.header = this.getHeaderResources();
    this.apresentation = this.getApresentationResource();
    this.projects = this.getProjectsResources();
    this.experience = this.getExperienceResources();
    this.hardSkills = this.getHardSkillsResources();
  }

  public getHeaderResources(): HeaderModel {
    return {
      name: this.lang == Language.enUS ? "Bruno Silva's portifolio" : 'Portifólio de Bruno Silva',
      apresentation: this.lang == Language.enUS ? 'Apresentation' : 'Apresentação',
      projects: this.lang == Language.enUS ? 'Projects' : 'Projetos',
      experience: this.lang == Language.enUS ? 'Experience' : 'Experiência',
      skills: this.lang == Language.enUS ? 'Skills' : 'Habilidades',
    }
  }

  public getApresentationResource(): ApresentationModel {
    return this.lang == Language.enUS ? {
      greatings: "Hello 👋 I'm Bruno",
      firstLine: "Web",
      secondLine: "Developer",
      description: "I have 3 years of professional experience in fullstack web development. Working mainly with .NET and Angular. I often find myself looking for new technologies knowing that there are always several ways to do something. I am ready to contribute with innovative solutions and seek technical excellence.",
      buttons: [
        { 
          type: ApresentationButtonType.link,
          tooltip: "Linkedin",
          value: 'https://www.linkedin.com/in/bruno-vinicius-346b77163/',
          svgIcon: 'linkedin' 
        },
        { 
          type: ApresentationButtonType.link,
          tooltip: 'Github',
          value: 'https://github.com/brunovbsilva',
          svgIcon: 'github' 
        },
        { 
          type: ApresentationButtonType.copy,
          tooltip: "Copy Discord tag",
          value: 'sonynz',
          svgIcon: 'discord',
          snackbar: "Copied to clipboard!"
        },
        { 
          type: ApresentationButtonType.copy,
          tooltip: "Copy email",
          value: 'brunovinicius0704@gmail.com',
          svgIcon: 'email',
          snackbar: "Copied to clipboard!"
        }
      ]
    } : {
      greatings: "Olá 👋 Eu sou o Bruno",
      firstLine: "Web",
      secondLine: "Developer",
      description: "Tenho 3 anos de experiência profissional em desenvolvimento web fullstack. Trabalhando principalmente com .NET e Angular. Muitas vezes me pego procurando novas tecnologias sabendo que sempre existem várias formas de fazer algo. Estou pronto para contribuir com soluções inovadoras e buscar a excelência técnica.",
      buttons: [
        {
          type: ApresentationButtonType.link,
          tooltip: "Linkedin",
          value: 'https://www.linkedin.com/in/bruno-vinicius-346b77163/',
          svgIcon: 'linkedin'
        },
        {
          type: ApresentationButtonType.link,
          tooltip: 'Github',
          value: 'https://github.com/brunovbsilva',
          svgIcon: 'github'
        },
        {
          type: ApresentationButtonType.copy,
          tooltip: "Copiar tag do Discord",
          value: 'sonynz',
          svgIcon: 'discord',
          snackbar: "Copiado para a área de transferência!",
        },
        {
          type: ApresentationButtonType.copy,
          tooltip: "Copiar email",
          value: 'brunovinicius0704@gmail.com',
          svgIcon: 'email',
          snackbar: "Copiado para a área de transferência!",
        }
      ]
    };
  }

  public getProjectsResources(): ProjectsModel {
    return this.lang == Language.enUS ? {
      header: 'Projects',
      projects: [
        {
          title: "Portifolio",
          description: "This project is my personal portfolio. It was developed using Angular and Material Design. It is a SPA (Single Page Application) and is hosted on Github Pages.",
          imagePath: 'assets/images/portifolio.png',
          buttons: [
            { type: 'code', link: 'https://github.com/brunovbsilva/portifolio', tooltip: 'View code' },
            { type: 'open_in_new', link: 'https://brunovbsilva.github.io/portifolio/', tooltip: 'Open project' },
          ]
        },
        { 
          title: 'Under construction...',
          description: "Under construction. There will be more features soon...",
          loading: true
        },
      ]
    }: {
      header: 'Projetos',
      projects: [
        {
          title: "Portifólio",
          description: "Este projeto é o meu portifólio pessoal. Foi desenvolvido utilizando Angular e Material Design. É uma SPA (Single Page Application) e está hospedado no Github Pages.",
          imagePath: 'assets/images/portifolio.png',
          buttons: [
            { type: 'code', link: 'https://github.com/brunovbsilva/portifolio', tooltip: 'Ver código' },
            { type: 'open_in_new', link: 'https://brunovbsilva.github.io/portifolio/', tooltip: 'Abrir projeto' },
          ]
        },
        { 
          title: "Em construção...",
          description: "Em construção. Em breve terá mais funcionalidades...",
          loading: true 
        },
      ]
    };
  }

  public getExperienceResources(): ExperienceModel {
    return this.lang == Language.enUS ? {
      header: 'Experience',
      jobs: [
        {
          position: 'Fullstack Developer',
          company: 'Stefanini',
          description: 'Development of the Trading platform for Raízen, one of the largest energy companies in Brazil. In this platform, customers can request fuel and petroleum derivatives deliveries, as well as track and manage their deliveries and account statements. The system was developed using a microservices architecture, .NET Core, Angular, and SQL Server.',
          startDate: new Date(2022, 8, 1),
          skills: ['C#', 'Angular', 'Ionic', 'Git', 'SQL Server']
        },
        {
          position: 'Fullstack Developer',
          company: 'Portway',
          description: 'Migration and support in a sales management system for multinational companies. The system was migrated from a monolithic architecture built on .NET Core MVC to a microservices architecture. It was developed using .NET Core, Angular, and SQL Server.',
          startDate: new Date(2020, 10, 1),
          endDate: new Date(2022, 7, 1),
          skills: ['C#', 'Angular', 'Git', 'SQL Server', 'Azure']
        },
      ]
    } : {
      header: 'Experiência',
      jobs: [
        {
          position: 'Desenvolvedor Fullstack',
          company: 'Stefanini',
          description: 'Desenvolvimento da plataforma de Trading para a Raízen, uma das maiores empresas de energia do Brasil. Nesta plataforma, os clientes podem solicitar entregas de combustíveis e derivados de petróleo, além de acompanhar e gerenciar suas entregas e extratos de conta. O sistema foi desenvolvido utilizando uma arquitetura de microsserviços, .NET Core, Angular e SQL Server.',
          startDate: new Date(2022, 8, 1),
          skills: ['C#', 'Angular', 'Ionic', 'Git', 'SQL Server']
        },
        {
          position: 'Desenvolvedor Fullstack',
          company: 'Portway',
          description: 'Migração e suporte em um sistema de gestão de vendas para empresas multinacionais. O sistema foi migrado de uma arquitetura monolítica construída em .NET Core MVC para uma arquitetura de microsserviços. Foi desenvolvido utilizando .NET Core, Angular e SQL Server.',
          startDate: new Date(2020, 10, 1),
          endDate: new Date(2022, 7, 1),
          skills: ['C#', 'Angular', 'Git', 'SQL Server', 'Azure']
        },
      ]
    };
  }

  public getHardSkillsResources(): HardSkillsModel {
    return this.lang == Language.enUS ? {
      header: 'Skills',
      skills: [
        { tooltip: 'C#', icon: 'csharp' },
        { tooltip: 'Angular', icon: 'angular' },
        { tooltip: 'Git', icon: 'git' },
        { tooltip: 'SQL Server', icon: 'sql-server' },
        { tooltip: 'Azure', icon: 'azure' },
        { tooltip: 'Ionic', icon: 'ionic' },
      ]
    } : {
      header: 'Habilidades',
      skills: [
        { tooltip: 'C#', icon: 'csharp' },
        { tooltip: 'Angular', icon: 'angular' },
        { tooltip: 'Git', icon: 'git' },
        { tooltip: 'SQL Server', icon: 'sql-server' },
        { tooltip: 'Azure', icon: 'azure' },
        { tooltip: 'Ionic', icon: 'ionic' },
      ]
    };
  }
}
