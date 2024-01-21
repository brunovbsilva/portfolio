import { IGithubRepository } from "../interfaces/github-repository.interface";
import { IGithubUser } from "./github-user.interface";
import { GithubUser } from "./github-user.model";

export class GithubRepository implements IGithubRepository {
  readonly id: number;
  readonly node_id: string;
  readonly html_url: string;
  readonly name: string;
  readonly owner: IGithubUser;
  readonly full_name: string;
  readonly description: string | null;
  readonly homepage: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly pushed_at: string;
  readonly stargazers_count: number;
  readonly watchers_count: number;
  readonly language: string | null;
  readonly forks_count: number;
  readonly allow_forking: boolean;
  readonly clone_url: string;

  constructor(data: IGithubRepository) {
    this.id = data.id;
    this.node_id = data.node_id;
    this.html_url = data.html_url;
    this.name = data.name;
    this.owner = new GithubUser(data.owner);
    this.full_name = data.full_name;
    this.description = data.description;
    this.homepage = data.homepage;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.pushed_at = data.pushed_at;
    this.stargazers_count = data.stargazers_count;
    this.watchers_count = data.watchers_count;
    this.language = data.language;
    this.forks_count = data.forks_count;
    this.allow_forking = data.allow_forking;
    this.clone_url = data.clone_url;
  }

  goToHomepage(): void {
    window.open(this.homepage, '_blank');
  }
  
  goToUrl(): void {
    window.open(this.html_url, '_blank');
  }

}