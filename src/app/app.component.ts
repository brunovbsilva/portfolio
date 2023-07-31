import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { discord, email, github, linkedin } from './material/custom-svgs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
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
