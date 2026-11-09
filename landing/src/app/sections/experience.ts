import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let exp = i18n.t().experience;
    <section class="section alt" id="experiencia">
      <div class="wrap narrow">
        <h2>{{ exp.title }}</h2>
        <ol class="timeline">
          @for (job of exp.jobs; track job.company) {
            <li class="job">
              <div class="when">{{ job.when }}</div>
              <div class="what">
                <h3>{{ job.role }} <span class="at">{{ job.company }}</span></h3>
                <ul>
                  @for (item of job.items; track $index) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
            </li>
          }
          <li class="job edu">
            <div class="when">{{ exp.schoolWhen }}</div>
            <div class="what">
              <h3>{{ exp.degree }} <span class="at">{{ exp.school }}</span></h3>
            </div>
          </li>
        </ol>
      </div>
    </section>
  `,
})
export class Experience {
  protected readonly i18n = inject(I18nService);
}
