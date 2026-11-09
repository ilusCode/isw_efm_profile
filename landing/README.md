# Landing (Angular 22)

Landing page de [isw-eduardo-fernandez.vercel.app](https://isw-eduardo-fernandez.vercel.app).

## Comandos

```bash
npm install        # instalar dependencias
npm start          # servidor de desarrollo en http://localhost:4200
npm test           # pruebas unitarias (Vitest)
npm run build      # build de producción en dist/landing/browser
```

## Estructura

```
src/
├── index.html                 # Título, meta, fuentes y favicon
├── styles.css                 # Estilos globales del sitio
└── app/
    ├── app.ts                 # Composición de la página
    ├── app.config.ts          # HttpClient con fetch
    ├── i18n/
    │   ├── content.ts         # Todo el texto en español e inglés
    │   └── i18n.service.ts    # Idioma activo (signal) y persistencia
    ├── github/
    │   ├── github.service.ts  # Repos públicos desde la API de GitHub
    │   └── fallback-repos.ts  # Copia guardada si la API no responde
    └── sections/              # Un componente por sección de la página
public/assets/                 # Foto y PDF del CV
```

Para cambiar textos, edita `src/app/i18n/content.ts`. Los PDF de `public/assets/cv/` los actualiza el script `curriculum/plantillas/generar_pdfs.sh`.
