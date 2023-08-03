import { Component, Input } from '@angular/core';
import { Skills } from '../../models/hard-skills.model';
import { HoverContentAnimations } from 'src/app/animations/hover-content.animation';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    HoverContentAnimations
  ],
})
export class SkillComponent {
  @Input() skill: Skills = new Skills();
  public spinnerState: 'initial' | 'final' = 'initial';
  public state: string = '';

  updateState(value: string) {
    console.log(value);
    this.state = value;
  }

}
