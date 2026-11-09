# Prompt para recrear mi CV (4 versiones en PDF)

**Copia exacta:** las plantillas HTML originales y la foto están en `curriculum/plantillas/`. Para regenerar los 4 PDF idénticos (requiere Google Chrome):

```bash
./curriculum/plantillas/generar_pdfs.sh
```

Los PDF quedan en `curriculum/pdf/` y se copian a `landing/public/assets/cv/`. Para cambiar contenido, edita el `.html` correspondiente y vuelve a ejecutar el script.

**Desde cero con una IA:** copia todo lo que está debajo de la línea y pégalo en Claude (u otra IA con capacidad de generar archivos). Adjunta también tu foto de perfil (cuadrada, fondo claro).

---

Necesito que generes mi CV en **4 archivos PDF** a partir de la información de abajo. No inventes datos ni cifras: usa solo lo que está aquí. Si algo no cabe, ajusta tamaños de fuente y espaciados, pero no elimines contenido.

## Archivos a generar

| Archivo | Idioma | Formato |
| --- | --- | --- |
| `CV_Eduardo_Fernandez_Diseno.pdf` | Español | Con diseño (descrito abajo), 1 página |
| `CV_Eduardo_Fernandez.pdf` | Español | Sencillo para ATS, una columna |
| `Resume_Eduardo_Fernandez_EN.pdf` | Inglés | Con diseño, 1 página |
| `Resume_Eduardo_Fernandez_EN_ATS.pdf` | Inglés | Sencillo para ATS, 1 página |

Todos en **tamaño carta (Letter, 8.5 × 11 in)**. Método sugerido: maquetar en HTML/CSS e imprimir a PDF con Chrome headless (`--print-to-pdf --no-pdf-header-footer`). Revisa visualmente cada PDF y confirma que no haya texto cortado ni una segunda página vacía.

## Especificación del diseño (versiones "Diseño" y "EN")

- **Tipografía:** Montserrat (Google Fonts), pesos 400–800.
- **Colores:** azul marino `#243a5e` (encabezado, acentos), texto títulos `#1c2b45`, texto cuerpo `#3a4456`, gris barra lateral `#e6e8ec`, blanco.
- **Encabezado:** banda azul marino de ~1.8 in de alto, a todo el ancho.
  - Nombre en blanco, ~30 pt, peso 700.
  - Debajo: "SENIOR BACKEND ENGINEER · TECH LEAD" en mayúsculas, ~9.6 pt, espaciado entre letras amplio (~2.2 pt), color azul claro `#dbe3f0`.
  - Foto circular (~1.85 in) con borde blanco y sombra suave, a la izquierda, montada entre el encabezado y la barra lateral.
- **Cuerpo en dos columnas:**
  - **Barra lateral izquierda** (~2.75 in, fondo gris `#e6e8ec`, se extiende hasta el final de la página): secciones Contacto (con íconos de teléfono, correo, GitHub y ubicación), Habilidades (agrupadas por categoría, cada tecnología como "chip" blanco con esquinas redondeadas) e Idiomas.
  - Los títulos de sección de la barra lateral van en mayúsculas dentro de un recuadro blanco, con espaciado entre letras.
  - **Columna principal derecha** (fondo blanco): Perfil profesional, Experiencia y Educación. Títulos de sección en mayúsculas, peso 800, con línea inferior azul marino de 2 pt.
  - Cada puesto: título del puesto en mayúsculas y negritas; debajo, en una línea, la empresa (izquierda) y las fechas (derecha) en cursiva azul marino; luego viñetas con marcador azul.
- Todo debe caber en **1 página**.

## Especificación de la versión sencilla (ATS)

- Una sola columna, sin foto, sin íconos, sin tablas ni colores.
- Fuente Arial ~9.8–10 pt; márgenes ~0.45–0.6 in.
- Encabezado: nombre, título profesional, y una línea de contacto separada por " | ".
- Títulos de sección estándar en mayúsculas con una línea delgada debajo.
- Habilidades como líneas "**Categoría:** tecnologías".
- La versión en inglés debe caber en 1 página; la versión en español puede ocupar 2.

## Datos personales

- **Nombre:** Eduardo Fernández
- **Título:** Senior Backend Engineer | Tech Lead
- **Ubicación:** Toluca, México (no incluir dirección completa)
- **Teléfono:** +52 722 582 3798
- **Correo:** isw_efm@icloud.com
- **GitHub:** github.com/iluscode (enlace: https://github.com/iluscode)
- **Sitio web:** isw-eduardo-fernandez.vercel.app (enlace: https://isw-eduardo-fernandez.vercel.app)

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

## Criterios de redacción (para cualquier cambio futuro)

- Viñetas cortas que empiecen con un verbo o sustantivo de acción; en inglés, verbos en pasado (Designed, Developed, Led).
- Priorizar logros con números ("10+ APIs", "últimos 2 proyectos") sobre tareas genéricas.
- El orden de las viñetas de Hitss pone primero el rol de enlace con Arquitectura, porque es lo que más pesa para Tech Lead.
- No incluir dirección completa; solo ciudad.
- El perfil apunta a vacantes de **Senior Backend Engineer** y **Tech Lead**.

## Pendientes que mejorarían el CV (agregar cuando tenga el dato)

- Tamaño del equipo que coordiné en GFT y sector del proyecto.
- Número de APIs o algún resultado medible en GFT.
- Nivel de inglés concreto (B1/B2) o certificación.
- Perfil de LinkedIn.
- Certificaciones (por ejemplo MuleSoft Certified Developer, AWS).
