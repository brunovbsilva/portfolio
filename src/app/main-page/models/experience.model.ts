import { Language } from "./language.model";

export class ExperienceModel {
  header: string = '';
  jobs: Job[] = [];
}

export class Job {
  position: string = '';
  company: string = '';
  description: string = '';
  startDate: Date = new Date();
  endDate?: Date;
  skills: string[] = [];
  language?: Language = Language.enUS;
}