import { Component } from '@angular/core';
import { GithubService } from '../services/github/github.service';
import { IGithubRepository } from '../services/github/interfaces/github-repository.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {

  public repositories: IGithubRepository[] = [];

  constructor(
    private githubService: GithubService
  ) {
    this.githubService.getRepositories(environment.github_user)
      .subscribe({
        next: repositories => this.repositories = repositories,
      });
  }

}
