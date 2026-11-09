import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { I18nService } from './i18n/i18n.service';

describe('App', () => {
  let http: HttpTestingController;

  beforeEach(async () => {
    localStorage.setItem('lang', 'es');
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    http = TestBed.inject(HttpTestingController);
  });

  it('muestra el nombre y las secciones principales', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Eduardo Fernández');
    expect(el.querySelector('#experiencia h2')?.textContent).toContain('Experiencia');
    http.match(() => true);
  });

  it('cambia el contenido al inglés', async () => {
    const fixture = TestBed.createComponent(App);
    TestBed.inject(I18nService).toggle();
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('#experiencia h2')?.textContent).toContain('Experience');
    http.match(() => true);
  });

  it('muestra los repos de GitHub sin forks, archivados ni el repo de perfil', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const repo = (name: string, extra = {}) => ({
      name,
      description: null,
      language: 'Java',
      topics: [],
      html_url: `https://github.com/ilusCode/${name}`,
      pushed_at: '2026-10-29T00:00:00Z',
      ...extra,
    });
    http
      .expectOne((r) => r.url.includes('/users/ilusCode/repos'))
      .flush([repo('api-uno'), repo('ilusCode'), repo('viejo', { archived: true }), repo('copia', { fork: true })]);
    await fixture.whenStable();
    const names = [...(fixture.nativeElement as HTMLElement).querySelectorAll('.project h3')].map((h) =>
      h.textContent?.trim(),
    );
    expect(names).toEqual(['api uno']);
  });

  it('usa la copia guardada si GitHub falla', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    http
      .expectOne((r) => r.url.includes('/users/ilusCode/repos'))
      .flush('rate limited', { status: 403, statusText: 'Forbidden' });
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.project').length).toBeGreaterThan(0);
    expect(el.textContent).toContain('copia guardada');
  });
});
