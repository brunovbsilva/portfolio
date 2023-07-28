import { Component, Input } from '@angular/core';
import { ApresentationButton } from './model/apresentation-button.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-apresentation-button',
  templateUrl: './apresentation-button.component.html',
  styleUrls: ['./apresentation-button.component.scss']
})
export class ApresentationButtonComponent {
  @Input() values: ApresentationButton = new ApresentationButton();

  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) { }

  onClick(link: string, type: 'link' | 'copy' = 'link'): void {
    switch (type) {
      case 'link':
        window.open(link, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(link);
        this.openSnackBar();
        break;
    }
  }

  openSnackBar() {
    this.translate.get('apresentation.snackbar-message').subscribe(t => {
      this.snackBar.open(t, undefined, { duration: 1000 });
    });
  }
}