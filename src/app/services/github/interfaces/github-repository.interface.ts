import { IGithubEntity } from "../models/github-entity.interface";
import { IGithubUser } from "../models/github-user.interface";

export interface IGithubRepository extends IGithubEntity {
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

  goToHomepage() : void;
}