export class Project {
  name!: string;
  description?: string;
  imagePath?: string;
  buttons: ProjectButtonLink[] = [];
}

export class ProjectButtonLink {
  type!: 'code' | 'open_in_new';
  link!: string;
  tooltip?: string;
}