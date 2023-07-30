import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainPageComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
