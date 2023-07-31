export class ApresentationModel {
  buttons: ApresentationButton[] = [];
  greatings: string = '';
  firstLine: string = '';
  secondLine: string = '';
  description: string = '';
}

export class ApresentationButton {
  tooltip: string = '';
  value: string = '';
  type: ApresentationButtonType = ApresentationButtonType.link;
  svgIcon: string = '';
  snackbar?: string;
}

export enum ApresentationButtonType {
  link = 1,
  copy = 2
}