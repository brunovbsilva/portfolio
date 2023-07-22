import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    TranslateModule
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule {}
