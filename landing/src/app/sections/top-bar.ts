import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-top-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <header class="topbar">
      <div class="wrap topbar-inner">
        <a class="brand" href="#top">ISW Eduardo Fernández</a>
        <nav aria-label="Secciones">
          <a href="#experiencia">{{ t.nav.experience }}</a>
          <a href="#proyectos">{{ t.nav.projects }}</a>
          <a href="#habilidades">{{ t.nav.skills }}</a>
          <a href="#contacto">{{ t.nav.contact }}</a>
        </nav>
        <button class="lang" type="button" [attr.aria-label]="t.langToggleLabel" (click)="i18n.toggle()">
          {{ i18n.lang() === 'es' ? 'EN' : 'ES' }}
        </button>
      </div>
    </header>
  `,
})
export class TopBar {
  protected readonly i18n = inject(I18nService);
}
