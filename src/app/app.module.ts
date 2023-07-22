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
import { ProjectsComponent } from './main-page/projects/projects.component';
import { ExperienceComponent } from './main-page/experience/experience.component';
import { HardSkillsComponent } from './main-page/hard-skills/hard-skills.component';
import { ContactComponent } from './main-page/contact/contact.component';

registerLocaleData(localePt);

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ApresentationComponent,
    ProjectsComponent,
    ExperienceComponent,
    HardSkillsComponent,
    ContactComponent
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
    }),
  ],
  exports: [ MaterialModule ],
  providers: [
    MaterialProviders,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
