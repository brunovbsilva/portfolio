export interface IGithubEntity {
  readonly id: number;
  readonly node_id: string;
  readonly html_url: string;

  goToUrl(): void;
}