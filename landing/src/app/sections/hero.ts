import { ChangeDetectionStrategy, Component, afterNextRender, computed, inject, signal } from '@angular/core';
import { CONTACT } from '../i18n/content';
import { I18nService } from '../i18n/i18n.service';

interface SpecLine {
  key: string;
  values: string[];
  isList: boolean;
  last: boolean;
}

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <section class="hero" id="top">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <img class="avatar" src="assets/foto.jpg" [alt]="t.hero.photoAlt" width="112" height="112" />
          <h1>Eduardo Fernández</h1>
          <p class="role">{{ t.hero.role }}</p>
          <p class="lead">{{ t.hero.lead }}</p>
          <div class="actions">
            <a class="btn primary" [href]="t.cvPrimary" download>{{ t.hero.cv }}</a>
            <a class="btn" [href]="'mailto:' + email">{{ t.hero.mail }}</a>
          </div>
        </div>

        <figure class="spec" [attr.aria-label]="t.hero.specLabel">
          <div class="spec-head">
            <span class="verb">GET</span>
            <span class="path">/engineers/eduardo-fernandez</span>
            <span class="status" [class.pending]="!ready()">{{ ready() ? '200 OK' : '…' }}</span>
          </div>
          <pre class="spec-body" [class.loading]="!ready()" [class.ready]="ready()"><span class="line p">{{ '{' }}</span>@for (line of lines(); track line.key) {<span class="line indent"><span class="k">"{{ line.key }}"</span><span class="p">:&#32;</span>@if (line.isList) {<span class="p">[</span>@for (v of line.values; track $index) {<span class="s">"{{ v }}"</span>@if (!$last) {<span class="p">,&#32;</span>}}<span class="p">]</span>} @else {<span class="s">"{{ line.values[0] }}"</span>}@if (!line.last) {<span class="p">,</span>}</span>}<span class="line p">{{ '}' }}</span></pre>
        </figure>
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly i18n = inject(I18nService);
  protected readonly email = CONTACT.email;
  protected readonly ready = signal(false);

  protected readonly lines = computed<SpecLine[]>(() => {
    const entries = Object.entries(this.i18n.t().spec);
    return entries.map(([key, v], i) => ({
      key,
      values: Array.isArray(v) ? v : [v],
      isList: Array.isArray(v),
      last: i === entries.length - 1,
    }));
  });

  constructor() {
    // Un único momento de animación: la "respuesta" llega poco después de cargar.
    afterNextRender(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        this.ready.set(true);
      } else {
        setTimeout(() => this.ready.set(true), 650);
      }
    });
  }
}
