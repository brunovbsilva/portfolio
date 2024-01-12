import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { angular, azure, csharp, css, discord, docker, email, firebase, git, github, html, ionic, linkedin, sass, sql_server, typescript } from './material/custom-svgs';

interface Icon {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private contactIcons: Icon[] = [
    {'discord': discord},
    {'email': email},
    {'github': github},
    {'linkedin': linkedin}
  ];
  private skillIcons: Icon[] = [
    {'angular': angular},
    {'azure': azure},
    {'csharp': csharp},
    {'css': css},
    {'docker': docker},
    {'firebase': firebase},
    {'git': git},
    {'html': html},
    {'ionic': ionic},
    {'sass': sass},
    {'sql-server': sql_server},
    {'typescript': typescript}
  ]

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerIcons(this.contactIcons);
    this.registerIcons(this.skillIcons);
  }

  private registerIcons(icons: Icon[]) {
    icons.forEach(icon => {
      const key = Object.keys(icon)[0];
      const svg = icon[key];
      this.registerIcon(key, svg);
    });
  }

  private registerIcon(key: string, svg: string) {
    this.matIconRegistry.addSvgIconLiteral(key, this.domSanitizer.bypassSecurityTrustHtml(svg));
  }
}
