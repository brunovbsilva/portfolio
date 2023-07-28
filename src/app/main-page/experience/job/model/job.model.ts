export class Job {
  position: string = '';
  company: string = '';
  description: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  skills: string[] = [];
}