import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const animateIn = '0.15s ease-in';
const animateOut = '0.25s ease-out';

const styleIdle = { scale: 1 };
const styleHover = { scale: 1.1 };

export const HoverContentAnimations = [
  trigger('hover', [
    state('out', style(styleIdle)),
    state('in', style(styleHover)),
    transition('* => in', [
      animate(animateIn, style(styleHover))
    ]),
    transition('* => out', [
      animate(animateOut, style(styleIdle))
    ]),
  ])
];
