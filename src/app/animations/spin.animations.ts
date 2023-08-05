import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export const spinAnimations = [
  trigger('spinner', [
    transition(":enter", [
      style({ transform: 'rotate(0deg)', scale: 0 }),
      animate('1s ease-in-out', keyframes([
        style({ transform: 'rotate(0deg)', scale: 0, offset: 0 }),
        style({ transform: 'rotate(270deg)', scale: 1.2, offset: 0.7 }),
        style({ transform: 'rotate(360deg)', scale: 1, offset: 1 })
      ]))
    ]),
    transition(":leave", [
      animate('1s ease-in-out', keyframes([
        style({ transform: 'rotate(360deg)', scale: 1, offset: 0 }),
        style({ transform: 'rotate(270deg)', scale: 1.2, offset: 0.3 }),
        style({ transform: 'rotate(0deg)', scale: 0, offset: 1 })
      ]))
    ])
  ]),
]