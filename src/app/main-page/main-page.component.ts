import { Component } from '@angular/core';
import { ProjectsModel } from './models/project.model';
import { HardSkillsModel } from './models/hard-skills.model';
import { ExperienceModel } from './models/experience.model';
import { ApresentationModel } from './models/apresentation.model';
import { HeaderModel } from './models/header.model';
import { Language } from './models/language.model';
import { apresentationEN, apresentationPT } from '../consts/apresentation.const';
import { projectsEN, projectsPT } from '../consts/projects.const';
import { experienceEN, experiencePT } from '../consts/experience.const';
import { hardSkillsEN, hardSkillsPT } from '../consts/hard-skills.conts';
import { headerEN, headerPT } from '../consts/header.const';

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
  public showAnchor: boolean = false;

  readonly observer = new IntersectionObserver((entries) => this.showAnchor = !entries[0].isIntersecting);

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
    return this.lang == Language.enUS ? headerEN : headerPT;
  }

  public getApresentationResource(): ApresentationModel {
    return this.lang == Language.enUS ? apresentationEN : apresentationPT;
  }

  public getProjectsResources(): ProjectsModel {
    return this.lang == Language.enUS ? projectsEN : projectsPT;
  }

  public getExperienceResources(): ExperienceModel {
    return this.lang == Language.enUS ? experienceEN : experiencePT;
  }

  public getHardSkillsResources(): HardSkillsModel {
    return this.lang == Language.enUS ? hardSkillsEN : hardSkillsPT;
  }

  public toggleLang() {
    this.lang = this.lang == Language.ptBR ? Language.enUS : Language.ptBR;
  }

  public getCurrentLangIcon() {
    return 'assets/images/' + Language[this.lang] + '.png';
  }

  public getCurrentLang() {
    return Language[this.lang];
  }
}
