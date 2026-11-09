# Prompt para recrear mi CV, landing page y repositorio

Este archivo sirve para dos cosas: regenerar todo con lo que ya existe en el repositorio, o pedirle a una IA que lo recree desde cero.

## Uso rápido (con el repositorio)

| Quiero… | Comando |
| --- | --- |
| Regenerar los 4 PDF del CV (requiere Google Chrome) | `./curriculum/plantillas/generar_pdfs.sh` |
| Ver la landing en local | `cd landing && npm install && npm start` → http://localhost:4200 |
| Correr las pruebas de la landing | `cd landing && npm test` |
| Publicar la landing en producción | `cd landing && vercel deploy --prod` |

- Los PDF quedan en `curriculum/pdf/` y el script también los copia a `landing/public/assets/cv/`.
- Para cambiar el CV, edita el `.html` correspondiente en `curriculum/plantillas/` y vuelve a ejecutar el script.
- Para cambiar textos de la landing, edita `landing/src/app/i18n/content.ts`.

## Desde cero con una IA

Copia todo lo que está debajo de la línea y pégalo en Claude (u otra IA que pueda crear archivos y ejecutar comandos). Adjunta tu foto de perfil (cuadrada, fondo claro). Puedes pedir solo una parte: **Parte 1** (CV), **Parte 2** (landing) o **Parte 3** (repositorio y despliegue).

---

Necesito que generes mi CV en PDF, una landing page personal en Angular y el repositorio que los contiene, a partir de la información de abajo. **No inventes datos ni cifras**: usa solo lo que está aquí. Si algo no cabe en el CV, ajusta tamaños de fuente y espaciados, pero no elimines contenido. Antes de entregar, revisa visualmente cada PDF y la landing en escritorio y en móvil.

# Parte 1 — Currículum (4 PDF)

## Archivos a generar

| Archivo | Idioma | Formato |
| --- | --- | --- |
| `CV_Eduardo_Fernandez_Diseno.pdf` | Español | Con diseño (descrito abajo) |
| `CV_Eduardo_Fernandez.pdf` | Español | Sencillo para ATS, una columna |
| `Resume_Eduardo_Fernandez_EN.pdf` | Inglés | Con diseño |
| `Resume_Eduardo_Fernandez_EN_ATS.pdf` | Inglés | Sencillo para ATS, una columna |

Todos en **tamaño carta (Letter, 8.5 × 11 in)** y en **1 página**. Método: maquetar cada versión en HTML/CSS e imprimir a PDF con Chrome headless (`--headless=new --print-to-pdf --no-pdf-header-footer`). Confirma que no haya texto cortado ni una segunda página vacía. Guarda las plantillas HTML, la foto recortada en círculo y un script `generar_pdfs.sh` que regenere los 4 PDF.

## Diseño (versiones con diseño, español e inglés)

- **Tipografía:** Montserrat (Google Fonts), pesos 400–800.
- **Colores:** azul marino `#243a5e` (encabezado, acentos), títulos `#1c2b45`, cuerpo `#3a4456`, gris de barra lateral `#e6e8ec`, blanco.
- **Encabezado:** banda azul marino de ~1.8 in de alto, a todo el ancho.
  - Nombre en blanco, ~30 pt, peso 700.
  - Debajo: "SENIOR BACKEND ENGINEER · TECH LEAD" en mayúsculas, ~9.6 pt, espaciado entre letras ~2.2 pt, color `#dbe3f0`.
  - Foto circular (~1.85 in) con borde blanco y sombra suave, a la izquierda, montada entre el encabezado y la barra lateral.
- **Cuerpo en dos columnas:**
  - **Barra lateral izquierda** (~2.75 in, fondo `#e6e8ec`, hasta el final de la página):
    - **Contacto** con íconos: teléfono, correo, GitHub, sitio web (globo; la dirección puede partirse en dos líneas antes de `.vercel.app`) y ubicación.
    - **Habilidades** agrupadas por categoría; cada tecnología como "chip" blanco con esquinas redondeadas.
    - **Idiomas.**
    - Títulos de sección en mayúsculas dentro de un recuadro blanco, con espaciado entre letras. Espaciado compacto para que todo quepa.
  - **Columna principal derecha** (fondo blanco): Perfil profesional, Experiencia y Educación. Títulos en mayúsculas, peso 800, con línea inferior azul marino de 2 pt.
  - Cada puesto: título en mayúsculas y negritas; debajo, en una línea, empresa (izquierda) y fechas (derecha) en cursiva azul marino; luego viñetas con marcador azul.

## Versión sencilla (ATS)

- Una sola columna, sin foto, sin íconos, sin tablas ni colores.
- Fuente Arial ~9.8 pt; márgenes ~0.45 × 0.6 in.
- Encabezado: nombre, título profesional y una línea de contacto separada por " | " (ciudad, teléfono, correo, GitHub, sitio web).
- Títulos de sección estándar en mayúsculas con una línea delgada debajo.
- Habilidades como líneas "**Categoría:** tecnologías".

## Datos personales

- **Nombre:** Eduardo Fernández
- **Título:** Senior Backend Engineer | Tech Lead
- **Ubicación:** Toluca, México (no incluir dirección completa)
- **Teléfono:** +52 722 582 3798 (solo en los PDF, no en la landing)
- **Correo:** isw_efm@icloud.com
- **GitHub:** github.com/iluscode (https://github.com/ilusCode)
- **Sitio web:** isw-eduardo-fernandez.vercel.app (https://isw-eduardo-fernandez.vercel.app)
- **LinkedIn:** https://www.linkedin.com/in/eduardo-fernandez-morales/ (se usa en la landing; aún no está en los PDF)

## Contenido en español

### Perfil profesional
Ingeniero de Software con más de 6 años de experiencia diseñando y desarrollando APIs y servicios backend escalables con Java, Kotlin, Spring y MuleSoft. Punto de contacto técnico entre Arquitectura y los equipos de Backend, con experiencia como Tech Lead coordinando equipos de desarrollo, traduciendo requerimientos de negocio en soluciones técnicas y asegurando la entrega en tiempo. Enfoque en calidad de código, soporte a producción y mejora continua de servicios en entornos con Kubernetes, OpenShift, AWS y pipelines CI/CD. En el último año, integración de herramientas de IA (Claude, GitHub Copilot) en el flujo de desarrollo para acelerar las entregas.

### Experiencia profesional

**Senior Backend Engineer — Hitss Solution**
*Agosto 2022 – Actualidad*
- Punto de contacto técnico entre el área de Arquitectura y los equipos de Backend, alineando las definiciones de diseño con la implementación.
- Análisis de requerimientos para traducir necesidades de negocio en soluciones técnicas.
- Diseño de más de 10 APIs para la comunicación entre las distintas capas de la arquitectura, con contratos en OAS (OpenAPI) y RAML, que sustentaron la solución de los últimos 2 proyectos asignados.
- Elaboración de ATD (documentos técnicos de trabajo) con especificaciones de lógica, diagramas y diseño de las APIs.
- Desarrollo de más de 10 APIs con Java, Kotlin y MuleSoft para esos proyectos, incluyendo pruebas unitarias y carga de configuraciones.
- Monitoreo de logs en desarrollo y producción, seguimiento y resolución de incidentes productivos que afectan a clientes, y mejora continua de los servicios.

**Backend Developer & Tech Lead — GFT**
*Enero 2020 – Agosto 2022*
- Desarrollo de APIs con Java y Spring Framework.
- Liderazgo y coordinación del equipo de desarrollo para cumplir objetivos y fechas de entrega del proyecto.
- Análisis de requerimientos y diseño de soluciones técnicas alineadas al negocio.

### Habilidades técnicas
- **Lenguajes:** Java, Kotlin, Python, Go
- **Frameworks e integración:** Spring, MuleSoft, Flask, FastAPI
- **Mensajería:** RabbitMQ, IBM MQ
- **Bases de datos:** Oracle, MySQL, MongoDB, Redis, Firebase
- **Cloud y DevOps:** AWS, Kubernetes, OpenShift, Jenkins, Git, Maven, Gradle, Nexus
- **Calidad, seguridad y monitoreo:** JUnit, Selenium, SonarQube, Veracode, Splunk
- **IA aplicada al desarrollo:** Claude, GitHub Copilot, plataformas de IA propias del cliente
- **Metodologías:** Scrum

### Educación
**Ingeniería en Software** — Unidad Académica Profesional Tianguistenco (UAEMex)
*2015 – 2020*

### Idiomas
- **Español:** nativo
- **Inglés:** conversacional

## Contenido en inglés

### Professional Summary
Software Engineer with 6+ years of experience designing and building scalable APIs and backend services with Java, Kotlin, Spring, and MuleSoft. Technical liaison between Architecture and Backend teams, with Tech Lead experience coordinating development teams, translating business requirements into technical solutions, and delivering on schedule. Focused on code quality, production support, and continuous service improvement in Kubernetes, OpenShift, AWS, and CI/CD environments. Over the past year, integrated AI tools (Claude, GitHub Copilot) into the development workflow to speed up delivery.

### Experience

**Senior Backend Engineer — Hitss Solution**
*August 2022 – Present*
- Technical liaison between the Architecture team and Backend teams, aligning design decisions with implementation.
- Requirements analysis to translate business needs into technical solutions.
- Designed 10+ APIs for communication across architecture layers, with contracts in OAS (OpenAPI) and RAML, forming the backbone of the last 2 projects delivered.
- Authored ATDs (technical design documents) covering business logic specifications, diagrams, and API design.
- Developed 10+ APIs with Java, Kotlin, and MuleSoft for those projects, including unit tests and configuration management.
- Monitored logs in development and production environments, tracked and resolved customer-impacting production incidents, and drove continuous service improvement.

**Backend Developer & Tech Lead — GFT**
*January 2020 – August 2022*
- Developed APIs with Java and the Spring Framework.
- Led and coordinated the development team to meet project goals and delivery deadlines.
- Performed requirements analysis and designed technical solutions aligned with business needs.

### Technical Skills
- **Languages:** Java, Kotlin, Python, Go
- **Frameworks & Integration:** Spring, MuleSoft, Flask, FastAPI
- **Messaging:** RabbitMQ, IBM MQ
- **Databases:** Oracle, MySQL, MongoDB, Redis, Firebase
- **Cloud & DevOps:** AWS, Kubernetes, OpenShift, Jenkins, Git, Maven, Gradle, Nexus
- **Quality & Monitoring:** JUnit, Selenium, SonarQube, Veracode, Splunk
- **AI-Assisted Development:** Claude, GitHub Copilot, client in-house AI platforms
- **Methodologies:** Scrum

### Education
**B.S. in Software Engineering** — UAEMex, Tianguistenco Professional Academic Unit
*2015 – 2020*

### Languages
- **Spanish:** Native
- **English:** Conversational

# Parte 2 — Landing page (Angular 22)

Una página personal que muestra el detalle del CV y mis proyectos de GitHub, pensada para reclutadores de vacantes Senior Backend y Tech Lead.

## Tecnología

- **Angular 22**: componentes standalone, signals, `ChangeDetectionStrategy.OnPush` y sin zone.js. Sin SSR.
- `HttpClient` con `withFetch()` para la API de GitHub.
- Pruebas unitarias con **Vitest** (el runner por defecto de Angular 22).
- Estilos en un solo archivo global (`src/styles.css`).

## Estructura

```
src/app/
├── app.ts                 # Composición: barra superior, secciones y pie
├── app.config.ts          # provideHttpClient(withFetch())
├── i18n/
│   ├── content.ts         # TODO el texto en español e inglés (tipado)
│   └── i18n.service.ts    # Idioma activo como signal, persistido en localStorage
├── github/
│   ├── github.service.ts  # Repos públicos de GitHub
│   └── fallback-repos.ts  # Copia guardada si la API falla
└── sections/              # top-bar, hero, profile, experience, projects, skills, contact
public/assets/             # foto.jpg y los 4 PDF en cv/
```

## Diseño

- **Fuentes:** IBM Plex Sans (texto) e IBM Plex Mono (solo la tarjeta de la API).
- **Colores:** azul marino `#243a5e`, azul profundo `#16263f`, tinta `#14213a`, texto `#33405a`, gris claro `#f3f5f8`, líneas `#d6dce6`, verde de "200 OK" `#2e9e7c`.
- **Título de la pestaña:** "ISW Eduardo Fernández · Senior Backend Engineer". Marca en la barra superior: "ISW Eduardo Fernández".
- **Elemento distintivo (el único con protagonismo):** en el encabezado azul, a la derecha, una tarjeta oscura con forma de respuesta de API: `GET /engineers/eduardo-fernandez` → `200 OK` y un JSON con rol, experiencia, empresa actual, stack, contratos (OAS 3, RAML), infra, qué busca y ubicación. Las claves del JSON cambian con el idioma. Una sola animación al cargar: el estado muestra "…" y a los ~650 ms pasa a "200 OK" mientras el JSON aparece. Sin animación si el usuario tiene `prefers-reduced-motion`.
- El resto de la página es sobrio: sin animaciones de entrada por sección.

## Secciones (en este orden)

1. **Barra superior fija:** marca, enlaces a Experiencia, Proyectos, Habilidades y Contacto, y botón ES/EN. En móvil se ocultan los enlaces.
2. **Encabezado:** foto circular, nombre, rol, una frase sobre diseño de APIs, botones "Descargar CV" (PDF del idioma activo) y "Escríbeme" (mailto), y la tarjeta de la API.
3. **Perfil:** el resumen profesional.
4. **Experiencia:** línea de tiempo vertical (Hitss, GFT y la carrera).
5. **Proyectos en GitHub:** tarjetas con nombre, descripción, hasta 6 temas, lenguaje con su color, fecha de actualización y estrellas; filtro por lenguaje.
6. **Habilidades:** grupos por categoría e idiomas.
7. **Contacto:** correo, LinkedIn, GitHub, ciudad y descarga de los 4 PDF. **Sin teléfono** (evita spam).

## Comportamiento

- **Idioma:** se detecta del navegador, se recuerda en `localStorage` y actualiza `<html lang>`. Todo el texto viene de `content.ts`.
- **Proyectos:** `GET https://api.github.com/users/ilusCode/repos?per_page=100&sort=pushed`. Excluir forks, repos archivados y el repo del README de perfil (`ilusCode`). Ordenar por número de temas y luego por fecha. Si la API falla o no devuelve repos, usar la copia guardada y mostrar un aviso.
- **Accesibilidad:** enlace "Saltar al contenido", foco visible, `aria-pressed` en los filtros y `aria-live` en la lista de proyectos.
- **Responsive:** sin desbordes horizontales a 375 px; la tarjeta de la API hace scroll horizontal dentro de sí misma si no cabe.

## Pruebas mínimas

- La página muestra el nombre y las secciones.
- El cambio a inglés actualiza los textos.
- El filtrado de repos excluye forks, archivados y el repo de perfil.
- Si GitHub responde con error, se muestran los repos guardados y el aviso.

# Parte 3 — Repositorio y despliegue

## Repositorio

- GitHub: https://github.com/ilusCode/isw_efm_profile (público).
- **Descripción:** "Sitio personal y currículum de Eduardo Fernández, Senior Backend Engineer y Tech Lead". **Sitio web:** la dirección de Vercel.
- **Etiquetas:** `portfolio` `personal-website` `landing-page` `resume` `cv` `html` `css` `javascript` `vercel` `github-api` `backend` `java` `kotlin` `spring-boot` `mulesoft`.
- **Ramas:** `develop` es la rama de trabajo; `main` es la rama de versiones y recibe cambios por PR desde `develop`. Las funciones nuevas van en ramas `feature/...` con PR hacia `develop`.
- **Estructura:**

```
isw_efm_profile/
├── README.md
├── curriculum/
│   ├── PROMPT_CV.md        # Este archivo
│   ├── pdf/                # Los 4 PDF
│   └── plantillas/         # 4 HTML, foto.jpg y generar_pdfs.sh
└── landing/                # App Angular 22 + vercel.json
```

- **Nunca subir:** `node_modules/`, `dist/`, `.angular/`, `.vercel/`, `.env*` (Vercel guarda ahí un token), `.DS_Store`.

## Despliegue en Vercel

- Proyecto `isw-eduardo-fernandez`, desplegado desde la carpeta `landing/` con `vercel deploy --prod`.
- `landing/vercel.json`: `framework: angular`, `installCommand: npm ci`, `buildCommand: npm run build`, `outputDirectory: dist/landing/browser`.
- `landing/.vercelignore`: `.env*`, `.vercel`, `node_modules`, `dist`, `.angular`, `coverage`.
- Dirección principal: https://isw-eduardo-fernandez.vercel.app. La dirección anterior `iluscode.vercel.app` redirige con un 308 permanente a la principal.
- Después de desplegar, verificar: la página carga sin errores en consola, aparecen los proyectos, los PDF se descargan y `/.env.local` no expone el archivo real.

# Criterios de redacción (para cualquier cambio futuro)

- Viñetas cortas que empiecen con un verbo o sustantivo de acción; en inglés, verbos en pasado (Designed, Developed, Led).
- Priorizar logros con números ("10+ APIs", "últimos 2 proyectos") sobre tareas genéricas.
- En Hitss, la primera viñeta es el rol de enlace con Arquitectura, porque es lo que más pesa para Tech Lead.
- No incluir dirección completa; solo ciudad. El teléfono va en los PDF, no en la landing.
- El perfil apunta a vacantes de **Senior Backend Engineer** y **Tech Lead**.
- La landing y los PDF deben decir lo mismo: si cambias el CV, actualiza también `landing/src/app/i18n/content.ts`.

# Pendientes que mejorarían el CV (agregar cuando tenga el dato)

- Tamaño del equipo que coordiné en GFT y sector del proyecto.
- Número de APIs o algún resultado medible en GFT.
- Nivel de inglés concreto (B1/B2) o certificación.
- Agregar LinkedIn a los PDF.
- Certificaciones (por ejemplo MuleSoft Certified Developer, AWS).
