# ISW Eduardo Fernández — Perfil profesional

[![Sitio en vivo](https://img.shields.io/badge/sitio-isw--eduardo--fernandez.vercel.app-243a5e?logo=vercel&logoColor=white)](https://isw-eduardo-fernandez.vercel.app)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Sin dependencias](https://img.shields.io/badge/dependencias-0-2e9e7c)

Sitio personal y currículum de **Eduardo Fernández**, Senior Backend Engineer y Tech Lead con más de 6 años diseñando y desarrollando APIs con Java, Kotlin, Spring y MuleSoft.

**👉 https://isw-eduardo-fernandez.vercel.app**

---

## Contenido

- [Qué incluye](#qué-incluye)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Landing page](#landing-page)
- [Currículum](#currículum)
- [Despliegue](#despliegue)
- [Contacto](#contacto)

## Qué incluye

| Parte | Descripción |
| --- | --- |
| **Landing page** | Sitio estático con perfil, experiencia, habilidades, proyectos de GitHub en vivo y descarga del CV. Bilingüe (español / inglés). |
| **Currículum** | 4 versiones en PDF: español e inglés, cada una con diseño y en versión sencilla para sistemas ATS. |
| **Plantillas** | HTML de cada versión del CV y un script que genera los PDF con Chrome. |
| **Prompt** | Instrucciones completas para recrear el CV desde cero con una IA. |

## Estructura del repositorio

```
isw_efm_profile/
├── curriculum/
│   ├── PROMPT_CV.md            # Prompt para recrear el CV con una IA
│   ├── pdf/                    # PDF generados
│   │   ├── CV_Eduardo_Fernandez_Diseno.pdf       # Español, con diseño
│   │   ├── CV_Eduardo_Fernandez.pdf              # Español, versión ATS
│   │   ├── Resume_Eduardo_Fernandez_EN.pdf       # Inglés, con diseño
│   │   └── Resume_Eduardo_Fernandez_EN_ATS.pdf   # Inglés, versión ATS
│   └── plantillas/
│       ├── cv_es_diseno.html
│       ├── cv_es_ats.html
│       ├── cv_en_diseno.html
│       ├── cv_en_ats.html
│       ├── foto.jpg
│       └── generar_pdfs.sh     # Genera los 4 PDF y los copia a la landing
└── landing/
    ├── index.html
    ├── styles.css
    ├── app.js                  # Idioma, proyectos de GitHub y filtros
    └── assets/                 # Foto y PDF descargables
```

## Landing page

HTML, CSS y JavaScript sin frameworks ni paso de compilación.

**Secciones:** encabezado con resumen en forma de respuesta de API (`GET /engineers/eduardo-fernandez → 200 OK`), perfil, experiencia en línea de tiempo, proyectos de GitHub, habilidades y contacto con descarga del CV.

**Detalles técnicos**

- **Proyectos en vivo:** se consultan desde la API pública de GitHub (`/users/ilusCode/repos`). Se omiten forks, repos archivados y el repo del perfil. Si la API no responde (por ejemplo, por el límite de 60 peticiones por hora), se muestra una copia guardada.
- **Filtro por lenguaje** en la sección de proyectos.
- **Español / inglés:** se detecta el idioma del navegador y se recuerda la elección. El botón "Descargar CV" entrega el PDF del idioma activo.
- **Accesibilidad:** enlace para saltar al contenido, foco visible y respeto a `prefers-reduced-motion`.
- **Responsive:** probado en escritorio y en móvil (375 px).

**Ejecutar en local**

```bash
python3 -m http.server 4300 --directory landing
```

Después abre http://localhost:4300.

**Configuración:** el usuario de GitHub y los repos ocultos se cambian al inicio de `landing/app.js`:

```js
const GITHUB_USER = "ilusCode";
const HIDDEN_REPOS = ["ilusCode"];
```

## Currículum

Para actualizar el CV:

1. Edita la plantilla correspondiente en `curriculum/plantillas/`.
2. Genera los PDF. Requiere Google Chrome; los archivos quedan en `curriculum/pdf/` y se copian a `landing/assets/cv/`.

   ```bash
   ./curriculum/plantillas/generar_pdfs.sh
   ```

3. Revisa que cada PDF quepa en una página y publica la landing (ver [Despliegue](#despliegue)).

Si usas otro navegador basado en Chromium, indica su ruta:

```bash
CHROME="/ruta/a/chrome" ./curriculum/plantillas/generar_pdfs.sh
```

## Despliegue

La landing está publicada en **Vercel** como sitio estático, desde la carpeta `landing/`:

```bash
cd landing && vercel deploy --prod
```

- Dirección principal: https://isw-eduardo-fernandez.vercel.app
- `iluscode.vercel.app` redirige de forma permanente (308) a la dirección principal.
- `landing/.vercelignore` evita publicar archivos locales como `.env.local`.

## Contacto

- **Sitio:** [isw-eduardo-fernandez.vercel.app](https://isw-eduardo-fernandez.vercel.app)
- **LinkedIn:** [eduardo-fernandez-morales](https://www.linkedin.com/in/eduardo-fernandez-morales/)
- **GitHub:** [@ilusCode](https://github.com/ilusCode)
- **Correo:** isw_efm@icloud.com
