import { IGithubUser } from './github-user.interface';

export class GithubUser implements IGithubUser {
  login: string;
  avatar_url: string;
  id: number;
  node_id: string;
  html_url: string;

  constructor(data: IGithubUser) {
    this.login = data.login;
    this.avatar_url = data.avatar_url;
    this.id = data.id;
    this.node_id = data.node_id;
    this.html_url = data.html_url;
  }

  goToUrl(): void {
    window.open(this.html_url, '_blank');
  }
}