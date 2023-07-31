import { Component, Input } from '@angular/core';
import { ApresentationButton, ApresentationButtonType } from '../../models/apresentation.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-apresentation-button',
  templateUrl: './apresentation-button.component.html',
  styleUrls: ['./apresentation-button.component.scss']
})
export class ApresentationButtonComponent {
  @Input() model: ApresentationButton = new ApresentationButton();

  constructor(
    private snackBar: MatSnackBar
  ) { }

  onClick(link: string, type: ApresentationButtonType): void {
    switch (type) {
      case ApresentationButtonType.link:
        window.open(link, '_blank');
        break;
      case ApresentationButtonType.copy:
        navigator.clipboard.writeText(link);
        this.openSnackBar();
        break;
    }
  }

  openSnackBar() {
    this.snackBar.open(this.model.snackbar!, undefined, { duration: 1000 });
  }
}
