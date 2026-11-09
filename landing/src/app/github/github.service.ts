import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { FALLBACK_REPOS } from './fallback-repos';

export const GITHUB_USER = 'ilusCode';
/** El repo del README de perfil no es un proyecto. */
const HIDDEN_REPOS = ['ilusCode'];

export interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  topics: string[];
  html_url: string;
  pushed_at: string | null;
  stargazers_count?: number;
  fork?: boolean;
  archived?: boolean;
}

export type ReposState = 'loading' | 'live' | 'fallback';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly http = inject(HttpClient);

  readonly repos = signal<Repo[]>([]);
  readonly state = signal<ReposState>('loading');

  load(): void {
    const url = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`;
    this.http.get<Repo[]>(url, { headers: { Accept: 'application/vnd.github+json' } }).subscribe({
      next: (data) => {
        const repos = data
          .filter((r) => !r.fork && !r.archived && !HIDDEN_REPOS.includes(r.name))
          .sort(
            (a, b) =>
              (b.topics?.length ?? 0) - (a.topics?.length ?? 0) ||
              new Date(b.pushed_at ?? 0).getTime() - new Date(a.pushed_at ?? 0).getTime(),
          );
        if (repos.length) {
          this.repos.set(repos);
          this.state.set('live');
        } else {
          this.useFallback();
        }
      },
      error: () => this.useFallback(),
    });
  }

  private useFallback(): void {
    this.repos.set(FALLBACK_REPOS);
    this.state.set('fallback');
  }
}
