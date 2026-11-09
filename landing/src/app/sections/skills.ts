import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let s = i18n.t().skills;
    <section class="section alt" id="habilidades">
      <div class="wrap">
        <h2>{{ s.title }}</h2>
        <dl class="skills">
          @for (group of s.groups; track group[0]) {
            <div>
              <dt>{{ group[0] }}</dt>
              <dd>{{ group[1] }}</dd>
            </div>
          }
        </dl>
        <p class="langs"><strong>{{ s.langsTitle }}</strong> {{ s.langsBody }}</p>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly i18n = inject(I18nService);
}
