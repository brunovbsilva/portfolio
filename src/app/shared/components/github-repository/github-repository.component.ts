import { AfterViewInit, Component, Input } from '@angular/core';
import { IGithubRepository } from 'src/app/services/github/interfaces/github-repository.interface';
import { IIconButton } from '../icon-button/interfaces/icon-button.interface';
import { BlankLinkButton } from '../icon-button/models/BlankLinkButton.model';

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.scss']
})
export class GithubRepositoryComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.getButtons();
  }
  @Input() repository!: IGithubRepository;
  public buttons: IIconButton[] = [];

  private getButtons(): void {
    if(this.repository.homepage) this.buttons.push(new BlankLinkButton('open_in_new', this.repository.homepage, 'Open project'));
    if(this.repository.html_url) this.buttons.push(new BlankLinkButton('code', this.repository.html_url, 'See repository'));
  }
}
