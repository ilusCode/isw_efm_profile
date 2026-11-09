import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from './i18n/i18n.service';
import { Contact } from './sections/contact';
import { Experience } from './sections/experience';
import { Hero } from './sections/hero';
import { Profile } from './sections/profile';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';
import { TopBar } from './sections/top-bar';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TopBar, Hero, Profile, Experience, Projects, Skills, Contact],
  template: `
    <a class="skip" href="#main">{{ i18n.t().skip }}</a>
    <app-top-bar />
    <main id="main">
      <app-hero />
      <app-profile />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-contact />
    </main>
    <footer class="footer">
      <div class="wrap">© {{ year }} Eduardo Fernández</div>
    </footer>
  `,
})
export class App {
  protected readonly i18n = inject(I18nService);
  protected readonly year = new Date().getFullYear();
}
