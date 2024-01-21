import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IGithubUser } from './models/github-user.interface';
import { IGithubRepository } from './interfaces/github-repository.interface';
import { GithubRepository } from './models/github-repository.model';
import { GithubUser } from './models/github-user.model';
import { url_configs } from 'src/assets/configs';

const url = url_configs.github_url;

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(username: string): Observable<IGithubUser> {
    return this.http
      .get<IGithubUser>(`${url}users/${username}`)
      .pipe(map(user => new GithubUser(user)));
  }

  getRepository(username: string, repository: string): Observable<GithubRepository> {
    return this.http
      .get<IGithubRepository>(`${url}repos/${username}/${repository}`)
      .pipe(map(repository => new GithubRepository(repository)));
  }

  getRepositories(username: string): Observable<GithubRepository[]> {
    return this.http
      .get<IGithubRepository[]>(`${url}users/${username}/repos`)
      .pipe(
        map(repositories => repositories.filter(repository => repository.name !== username)),
        map(repositories => repositories.map(repository => new GithubRepository(repository))),
        map(repositories => repositories.sort((a, b) => a.pushed_at > b.pushed_at ? -1 : 1))
      );
  }
}
