# ISW Eduardo Fernández — Perfil profesional

Sitio personal y currículum de Eduardo Fernández, Senior Backend Engineer y Tech Lead.

**Sitio:** https://isw-eduardo-fernandez.vercel.app

## Estructura

```
├── curriculum/
│   ├── PROMPT_CV.md     # Prompt para recrear el CV desde cero con una IA
│   ├── pdf/             # Los 4 PDF del CV (español e inglés, con diseño y versión ATS)
│   └── plantillas/      # Plantillas HTML, foto y script generar_pdfs.sh
└── landing/             # Landing page estática (HTML, CSS y JS sin dependencias)
```

## Actualizar el CV

1. Edita la plantilla correspondiente en `curriculum/plantillas/`.
2. Genera los PDF (requiere Google Chrome); también se copian a `landing/assets/cv/`:

   ```bash
   ./curriculum/plantillas/generar_pdfs.sh
   ```

## Publicar la landing

La landing se despliega en Vercel desde la carpeta `landing/`:

```bash
cd landing && vercel deploy --prod
```

Los proyectos de GitHub se cargan en vivo desde la API pública de GitHub para el usuario `ilusCode`.
