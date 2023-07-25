import { Component, Input } from '@angular/core';
import { Skill } from './model/skill.model';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    trigger('spinner', [
      transition('* => final', [
        animate('2s', keyframes([
          style({ transform: 'rotate(0deg)', height: '0%', top: '50%', backgroundColor: 'blue', offset: 0 }),
          style({ transform: 'rotate(180deg)', height: '80%', top: '10%', backgroundColor: 'red', offset: 0.5 }),
          style({ transform: 'rotate(360deg)', height: '0%', top: '50%', backgroundColor: 'orange', offset: 1 })
        ]))
      ]),
      transition('* => initial', [
        animate('0s', style({ transform: 'rotate(0deg)', opacity: 0 }))
      ])
    ])
  ],
})
export class SkillComponent {
  @Input() skill: Skill = new Skill();
  public spinnerState: 'initial' | 'final' = 'initial';
}
