import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MaterialProviders } from './material/providers';
import { ApresentationComponent } from './main-page/apresentation/apresentation.component';
import { ExperienceComponent } from './main-page/experience/experience.component';
import { HardSkillsComponent } from './main-page/hard-skills/hard-skills.component';
import { SkillComponent } from './main-page/hard-skills/skill/skill.component';
import { DescriptionComponent } from './main-page/hard-skills/description/description.component';
import { ProjectsComponent } from './main-page/projects/projects.component';
import { ProjectComponent } from './main-page/projects/project/project.component';
import { ProjectButtonLinkComponent } from './main-page/projects/project-button-link/project-button-link.component';
import { JobComponent } from './main-page/experience/job/job.component';
import { AnchorDirective } from './directive/anchor.directive';
import { ApresentationButtonComponent } from './main-page/apresentation/apresentation-button/apresentation-button.component';

registerLocaleData(localePt);

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ApresentationComponent,
    ExperienceComponent,
    HardSkillsComponent,
    SkillComponent,
    DescriptionComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectButtonLinkComponent,
    JobComponent,
    AnchorDirective,
    ApresentationButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ],
      },
    })
  ],
  providers: [
    MaterialProviders,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
