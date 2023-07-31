export class ProjectsModel {
  header: string = '';
  projects: Project[] = [];
}

export class Project {
  title!: string;
  description?: string;
  imagePath?: string;
  buttons?: ProjectButtonLink[];
  loading?: boolean;
}

export class ProjectButtonLink {
  type!: 'code' | 'open_in_new';
  link!: string;
  tooltip?: string;
}