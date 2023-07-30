import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CdkMenuModule} from '@angular/cdk/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CdkMenuModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  exports: [
    CdkMenuModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}