import { HardSkillsModel, Skills } from "../main-page/models/hard-skills.model";

const skills: Skills[] = [
  { tooltip: 'C#', icon: 'csharp' },
  { tooltip: 'Angular', icon: 'angular' },
  { tooltip: 'Git', icon: 'git' },
  { tooltip: 'SQL Server', icon: 'sql-server' },
  { tooltip: 'Azure', icon: 'azure' },
  { tooltip: 'Ionic', icon: 'ionic' },
  { tooltip: 'Docker', icon: 'docker' },
  { tooltip: 'Firebase', icon: 'firebase'},
  { tooltip: 'HTML', icon: 'html' },
  { tooltip: 'CSS', icon: 'css' },
  { tooltip: 'SASS', icon: 'sass' },
  { tooltip: 'TypeScript', icon: 'typescript' }
]

export const hardSkillsEN: HardSkillsModel = {
    header: 'Skills',
    skills: skills
};

export const hardSkillsPT: HardSkillsModel = {
    header: 'Habilidades',
    skills: skills
};

