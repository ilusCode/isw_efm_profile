import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CONTACT } from '../i18n/content';
import { I18nService } from '../i18n/i18n.service';
import { GithubService, Repo } from '../github/github.service';

const LANG_COLORS: Record<string, string> = {
  Java: '#b07219',
  Python: '#3572A5',
  TypeScript: '#3178c6',
  Kotlin: '#A97BFF',
  Go: '#00ADD8',
  Shell: '#89e051',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
};

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().projects;
    <section class="section" id="proyectos">
      <div class="wrap">
        <div class="section-head">
          <h2>{{ t.title }}</h2>
          <p class="muted">{{ t.sub }}</p>
        </div>

        @if (github.state() !== 'loading') {
          <div class="filters" role="group" [attr.aria-label]="t.filterLabel">
            <button type="button" [attr.aria-pressed]="filter() === 'all'" (click)="filter.set('all')">
              {{ t.allFilter }}
            </button>
            @for (lang of languages(); track lang) {
              <button type="button" [attr.aria-pressed]="filter() === lang" (click)="filter.set(lang)">
                {{ lang }}
              </button>
            }
          </div>
        }

        <ul class="projects" aria-live="polite">
          @if (github.state() === 'loading') {
            @for (i of [1, 2, 3]; track i) {
              <li class="project skeleton" aria-hidden="true"></li>
            }
          } @else {
            @for (repo of shown(); track repo.name) {
              <li class="project" [style.--lang-color]="color(repo)">
                <h3>
                  <a [href]="repo.html_url" target="_blank" rel="noopener">{{ prettyName(repo.name) }}</a>
                </h3>
                @if (repo.description) {
                  <p>{{ repo.description }}</p>
                }
                @if (repo.topics.length) {
                  <ul class="topics" [attr.aria-label]="t.topicsLabel">
                    @for (topic of repo.topics.slice(0, 6); track topic) {
                      <li>{{ topic }}</li>
                    }
                  </ul>
                }
                <div class="meta">
                  @if (repo.language) {
                    <span class="lang-name">{{ repo.language }}</span>
                  }
                  @if (repo.pushed_at) {
                    <span>{{ t.updated }} {{ formatDate(repo.pushed_at) }}</span>
                  }
                  @if (repo.stargazers_count) {
                    <span>★ {{ repo.stargazers_count }}</span>
                  }
                </div>
              </li>
            } @empty {
              <li class="muted">{{ t.empty }}</li>
            }
          }
        </ul>

        @if (github.state() === 'fallback') {
          <p class="muted small">{{ t.fallback }}</p>
        }
        <a class="btn" [href]="githubUrl" target="_blank" rel="noopener">{{ t.all }}</a>
      </div>
    </section>
  `,
})
export class Projects {
  protected readonly i18n = inject(I18nService);
  protected readonly github = inject(GithubService);
  protected readonly githubUrl = CONTACT.github;
  protected readonly filter = signal<string>('all');

  protected readonly languages = computed(() =>
    [...new Set(this.github.repos().map((r) => r.language).filter((l): l is string => !!l))].sort(),
  );

  protected readonly shown = computed(() => {
    const f = this.filter();
    return this.github.repos().filter((r) => f === 'all' || r.language === f);
  });

  private readonly dateFormat = computed(
    () => new Intl.DateTimeFormat(this.i18n.t().locale, { month: 'short', year: 'numeric' }),
  );

  constructor() {
    this.github.load();
  }

  protected color(repo: Repo): string {
    return (repo.language && LANG_COLORS[repo.language]) || 'var(--navy)';
  }

  protected prettyName(name: string): string {
    return name.replace(/[-_]/g, ' ');
  }

  protected formatDate(iso: string): string {
    return this.dateFormat().format(new Date(iso));
  }
}
