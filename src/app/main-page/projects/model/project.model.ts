export class Project {
  name!: string;
  imagePath?: string;
  buttons?: ProjectButtonLink[];
  loading?: boolean;
}

export class ProjectButtonLink {
  type!: 'code' | 'open_in_new';
  link!: string;
  tooltip?: string;
}