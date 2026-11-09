import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="perfil">
      <div class="wrap narrow">
        <h2>{{ i18n.t().profile.title }}</h2>
        <p class="prose">{{ i18n.t().profile.body }}</p>
      </div>
    </section>
  `,
})
export class Profile {
  protected readonly i18n = inject(I18nService);
}
