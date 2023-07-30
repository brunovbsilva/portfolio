import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { discord, email, github, linkedin } from './material/custom-svgs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  culture_code: string;

  constructor(
    private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.culture_code = window.navigator.language ?? 'pt-BR';
    this.translate.setDefaultLang(this.culture_code);
    this.translate.use(this.culture_code);
    this.matIconRegistry.addSvgIconLiteral(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustHtml(linkedin)
    );
    this.matIconRegistry.addSvgIconLiteral(
      'github',
      this.domSanitizer.bypassSecurityTrustHtml(github)
    );
    this.matIconRegistry.addSvgIconLiteral(
      'discord',
      this.domSanitizer.bypassSecurityTrustHtml(discord)
    );
    this.matIconRegistry.addSvgIconLiteral(
      'email',
      this.domSanitizer.bypassSecurityTrustHtml(email)
    );
  }
}
