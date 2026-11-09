import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { CONTENT, Lang } from './content';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.initialLang());
  readonly t = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* sin almacenamiento disponible */
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'en') return saved;
    } catch {
      /* sin almacenamiento disponible */
    }
    const nav = this.document.defaultView?.navigator.language ?? 'es';
    return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
  }
}
