export class Job {
  position: string = '';
  company: string = '';
  description: string = '';
  startDate: Date = new Date();
  endDate?: Date;
  skills: string[] = [];
}