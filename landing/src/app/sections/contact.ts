import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CONTACT } from '../i18n/content';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <section class="section contact" id="contacto">
      <div class="wrap narrow">
        <h2>{{ t.contact.title }}</h2>
        <p class="prose">{{ t.contact.body }}</p>
        <ul class="contact-list">
          <li><a [href]="'mailto:' + links.email">{{ links.email }}</a></li>
          <li><a [href]="links.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a [href]="links.github" target="_blank" rel="noopener">GitHub</a></li>
          <li>{{ t.contact.city }}</li>
        </ul>
        <div class="downloads">
          <h3>{{ t.contact.cvs }}</h3>
          <ul>
            @for (cv of t.cvFiles; track cv.file) {
              <li><a [href]="cv.file" download>{{ cv.label }}</a></li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly links = CONTACT;
}
