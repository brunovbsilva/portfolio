import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { GithubRepositoryComponent } from './components/github-repository/github-repository.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    GithubRepositoryComponent,
    IconButtonComponent
  ],
  exports: [
    GithubRepositoryComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
