import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export const spinAnimations = [
    trigger('spinner', [
        transition('* => final', [
          animate('2s', keyframes([
            style({ transform: 'rotate(0deg)', height: '0%', top: '50%', backgroundColor: 'blue', offset: 0 }),
            style({ transform: 'rotate(180deg)', height: '80%', top: '10%', backgroundColor: 'red', offset: 0.5 }),
            style({ transform: 'rotate(360deg)', height: '0%', top: '50%', backgroundColor: 'blue', offset: 1 })
          ]))
        ]),
        transition('* => initial', [
          animate('0s', style({ transform: 'rotate(0deg)', opacity: 0 }))
        ])
      ]),
]