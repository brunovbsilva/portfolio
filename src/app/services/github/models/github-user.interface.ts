import { IGithubEntity } from "./github-entity.interface";

export interface IGithubUser extends IGithubEntity {
  readonly login: string;
  readonly avatar_url: string;
}