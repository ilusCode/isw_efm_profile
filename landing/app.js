(() => {
  "use strict";

  const GITHUB_USER = "ilusCode";
  const HIDDEN_REPOS = ["ilusCode"]; // el repo del README de perfil

  const LANG_COLORS = { Java: "#b07219", Python: "#3572A5", TypeScript: "#3178c6", Kotlin: "#A97BFF", Go: "#00ADD8", Shell: "#89e051", JavaScript: "#f1e05a" };

  // Respaldo por si la API de GitHub no responde (límite de 60 peticiones por hora sin sesión).
  const FALLBACK_REPOS = [
    { name: "Notes-manager", description: "API REST con Spring Boot y WebFlux que genera PDFs de notas numeradas a partir de una plantilla.", language: "Java", topics: ["spring-boot", "spring-webflux", "jasperreports", "rest-api"] },
    { name: "single-sign-on", description: "Servicio de Single Sign-On con FastAPI y MongoDB: registro, login con credenciales cifradas y JWT.", language: "Python", topics: ["fastapi", "mongodb", "jwt", "argon2", "sso"] },
    { name: "application-management-api", description: "REST API to manage an application catalog (apps, images and change history) with FastAPI and MongoDB.", language: "Python", topics: ["fastapi", "mongodb", "docker", "pytest"] },
    { name: "ollama-client-api", description: "API REST en Spring Boot 4 (Java 26 + WebFlux) que expone un endpoint de chat sobre un servidor Ollama local.", language: "Java", topics: ["spring-boot", "ollama", "llm", "docker"] },
    { name: "dashboard-server", description: "Dashboard en Angular 22 con SSR para gestionar el catálogo de aplicaciones de application-management-api.", language: "TypeScript", topics: ["angular", "angular-ssr", "express", "vitest"] }
  ].map(r => ({ ...r, html_url: `https://github.com/${GITHUB_USER}/${r.name}`, pushed_at: null }));

  const I18N = {
    es: {
      skip: "Saltar al contenido",
      "nav.exp": "Experiencia", "nav.projects": "Proyectos", "nav.skills": "Habilidades", "nav.contact": "Contacto",
      "hero.role": "Senior Backend Engineer y Tech Lead",
      "hero.lead": "Diseño y construyo APIs que conectan las capas de un sistema: del contrato en OAS o RAML al servicio en producción, con Java, Kotlin, Spring y MuleSoft.",
      "hero.cv": "Descargar CV", "hero.mail": "Escríbeme",
      "profile.title": "Perfil",
      "profile.body": "Ingeniero de Software con más de 6 años de experiencia diseñando y desarrollando APIs y servicios backend escalables. Soy el punto de contacto técnico entre Arquitectura y los equipos de Backend, y he trabajado como Tech Lead coordinando equipos, traduciendo requerimientos de negocio en soluciones técnicas y entregando en tiempo. Me enfoco en calidad de código, soporte a producción y mejora continua en entornos con Kubernetes, OpenShift, AWS y CI/CD. En el último año integré herramientas de IA (Claude, GitHub Copilot) al flujo de desarrollo para acelerar las entregas.",
      "exp.title": "Experiencia",
      "exp.hitss.when": "Ago 2022 – hoy",
      "exp.hitss.items": [
        "Punto de contacto técnico entre Arquitectura y los equipos de Backend, alineando las definiciones de diseño con la implementación.",
        "Diseño de más de 10 APIs entre las capas de la arquitectura, con contratos en OAS (OpenAPI) y RAML, que sustentaron los últimos 2 proyectos.",
        "Desarrollo de más de 10 APIs con Java, Kotlin y MuleSoft, con pruebas unitarias y carga de configuraciones.",
        "Elaboración de ATD (documentos técnicos) con especificaciones de lógica, diagramas y diseño de APIs.",
        "Análisis de requerimientos para traducir necesidades de negocio en soluciones técnicas.",
        "Monitoreo de logs en desarrollo y producción, y resolución de incidentes productivos que afectan a clientes."
      ],
      "exp.gft.when": "Ene 2020 – Ago 2022",
      "exp.gft.items": [
        "Desarrollo de APIs con Java y Spring Framework.",
        "Liderazgo y coordinación del equipo de desarrollo para cumplir objetivos y fechas de entrega.",
        "Análisis de requerimientos y diseño de soluciones técnicas alineadas al negocio."
      ],
      "edu.degree": "Ingeniería en Software",
      "projects.title": "Proyectos en GitHub",
      "projects.sub": "Repositorios públicos, cargados en vivo desde GitHub.",
      "projects.all": "Ver perfil en GitHub",
      "projects.allFilter": "Todos",
      "projects.updated": "Actualizado",
      "projects.fallback": "No se pudo consultar GitHub en este momento; se muestra una copia guardada de los repositorios.",
      "projects.empty": "No hay proyectos con ese lenguaje.",
      "skills.title": "Habilidades",
      "langs.title": "Idiomas", "langs.body": "Español nativo, inglés conversacional",
      "contact.title": "Hablemos",
      "contact.body": "Busco posiciones como Senior Backend Engineer o Tech Lead. Escríbeme y te respondo pronto.",
      "contact.city": "Toluca, México",
      "contact.cvs": "Descarga mi CV",
      "cv.es": "Español", "cv.esPlain": "Español, texto simple", "cv.en": "Inglés", "cv.enPlain": "Inglés, texto simple",
      cvPrimary: "assets/cv/CV_Eduardo_Fernandez_Diseno.pdf",
      langLabel: "Switch to English",
      skills: [
        ["Lenguajes", "Java, Kotlin, Python, Go"],
        ["Frameworks e integración", "Spring, MuleSoft, Flask, FastAPI"],
        ["Mensajería", "RabbitMQ, IBM MQ"],
        ["Bases de datos", "Oracle, MySQL, MongoDB, Redis, Firebase"],
        ["Cloud y DevOps", "AWS, Kubernetes, OpenShift, Jenkins, Git, Maven, Gradle, Nexus"],
        ["Calidad y monitoreo", "JUnit, Selenium, SonarQube, Veracode, Splunk"],
        ["IA aplicada al desarrollo", "Claude, GitHub Copilot, plataformas de IA del cliente"],
        ["Metodologías", "Scrum"]
      ],
      spec: {
        rol: "Senior Backend Engineer",
        experiencia: "6+ años",
        empresa_actual: "Hitss Solution",
        stack: ["Java", "Kotlin", "Spring", "MuleSoft"],
        contratos: ["OAS 3", "RAML"],
        infra: ["Kubernetes", "OpenShift", "AWS"],
        busca: ["Senior Backend", "Tech Lead"],
        ubicacion: "Toluca, México"
      },
      locale: "es-MX"
    },
    en: {
      skip: "Skip to content",
      "nav.exp": "Experience", "nav.projects": "Projects", "nav.skills": "Skills", "nav.contact": "Contact",
      "hero.role": "Senior Backend Engineer and Tech Lead",
      "hero.lead": "I design and build the APIs that connect a system's layers: from the OAS or RAML contract to the service in production, with Java, Kotlin, Spring, and MuleSoft.",
      "hero.cv": "Download resume", "hero.mail": "Email me",
      "profile.title": "Profile",
      "profile.body": "Software Engineer with 6+ years of experience designing and building scalable APIs and backend services. I'm the technical liaison between Architecture and Backend teams, and I've worked as a Tech Lead coordinating teams, translating business requirements into technical solutions, and delivering on schedule. I focus on code quality, production support, and continuous improvement in Kubernetes, OpenShift, AWS, and CI/CD environments. Over the past year I've integrated AI tools (Claude, GitHub Copilot) into the development workflow to speed up delivery.",
      "exp.title": "Experience",
      "exp.hitss.when": "Aug 2022 – now",
      "exp.hitss.items": [
        "Technical liaison between Architecture and Backend teams, aligning design decisions with implementation.",
        "Designed 10+ APIs across architecture layers, with contracts in OAS (OpenAPI) and RAML, forming the backbone of the last 2 projects.",
        "Developed 10+ APIs with Java, Kotlin, and MuleSoft, including unit tests and configuration management.",
        "Authored ATDs (technical design documents) with logic specifications, diagrams, and API design.",
        "Requirements analysis to translate business needs into technical solutions.",
        "Monitored logs in development and production, and resolved customer-impacting production incidents."
      ],
      "exp.gft.when": "Jan 2020 – Aug 2022",
      "exp.gft.items": [
        "Developed APIs with Java and the Spring Framework.",
        "Led and coordinated the development team to meet goals and delivery deadlines.",
        "Performed requirements analysis and designed technical solutions aligned with the business."
      ],
      "edu.degree": "B.S. in Software Engineering",
      "projects.title": "Projects on GitHub",
      "projects.sub": "Public repositories, loaded live from GitHub.",
      "projects.all": "View GitHub profile",
      "projects.allFilter": "All",
      "projects.updated": "Updated",
      "projects.fallback": "GitHub couldn't be reached right now; showing a saved copy of the repositories.",
      "projects.empty": "No projects in that language.",
      "skills.title": "Skills",
      "langs.title": "Languages", "langs.body": "Spanish (native), English (conversational)",
      "contact.title": "Let's talk",
      "contact.body": "I'm looking for Senior Backend Engineer or Tech Lead roles. Send me an email and I'll get back to you soon.",
      "contact.city": "Toluca, Mexico",
      "contact.cvs": "Download my resume",
      "cv.es": "Spanish", "cv.esPlain": "Spanish, plain text", "cv.en": "English", "cv.enPlain": "English, plain text",
      cvPrimary: "assets/cv/Resume_Eduardo_Fernandez_EN.pdf",
      langLabel: "Cambiar a español",
      skills: [
        ["Languages", "Java, Kotlin, Python, Go"],
        ["Frameworks & integration", "Spring, MuleSoft, Flask, FastAPI"],
        ["Messaging", "RabbitMQ, IBM MQ"],
        ["Databases", "Oracle, MySQL, MongoDB, Redis, Firebase"],
        ["Cloud & DevOps", "AWS, Kubernetes, OpenShift, Jenkins, Git, Maven, Gradle, Nexus"],
        ["Quality & monitoring", "JUnit, Selenium, SonarQube, Veracode, Splunk"],
        ["AI-assisted development", "Claude, GitHub Copilot, client in-house AI platforms"],
        ["Methodologies", "Scrum"]
      ],
      spec: {
        role: "Senior Backend Engineer",
        experience: "6+ years",
        current_company: "Hitss Solution",
        stack: ["Java", "Kotlin", "Spring", "MuleSoft"],
        contracts: ["OAS 3", "RAML"],
        infra: ["Kubernetes", "OpenShift", "AWS"],
        open_to: ["Senior Backend", "Tech Lead"],
        location: "Toluca, Mexico"
      },
      locale: "en-US"
    }
  };

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } }
  };

  let lang = store.get("lang") || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  let repos = [];
  let usingFallback = false;
  let filter = "all";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderSpec(obj) {
    const val = v => Array.isArray(v)
      ? `<span class="p">[</span>${v.map(x => `<span class="s">"${esc(x)}"</span>`).join('<span class="p">, </span>')}<span class="p">]</span>`
      : `<span class="s">"${esc(v)}"</span>`;
    const lines = Object.entries(obj).map(([k, v], i, a) =>
      `  <span class="k">"${esc(k)}"</span><span class="p">: </span>${val(v)}${i < a.length - 1 ? '<span class="p">,</span>' : ""}`);
    return `<span class="p">{</span>\n${lines.join("\n")}\n<span class="p">}</span>`;
  }

  function applyLang() {
    const t = I18N[lang];
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => { const v = t[el.dataset.i18n]; if (typeof v === "string") el.textContent = v; });
    $$("[data-i18n-list]").forEach(el => { el.innerHTML = t[el.dataset.i18nList].map(x => `<li>${esc(x)}</li>`).join(""); });
    $("#skills").innerHTML = t.skills.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
    $("#specBody").innerHTML = renderSpec(t.spec);
    $("#cvPrimary").setAttribute("href", t.cvPrimary);
    const btn = $("#langToggle");
    btn.textContent = lang === "es" ? "EN" : "ES";
    btn.setAttribute("aria-label", t.langLabel);
    renderProjects();
  }

  function renderFilters() {
    const t = I18N[lang];
    const langs = [...new Set(repos.map(r => r.language).filter(Boolean))].sort();
    const opts = [["all", t["projects.allFilter"]], ...langs.map(l => [l, l])];
    $("#filters").innerHTML = opts.map(([v, label]) =>
      `<button type="button" data-filter="${esc(v)}" aria-pressed="${v === filter}">${esc(label)}</button>`).join("");
  }

  function renderProjects() {
    const t = I18N[lang];
    const list = $("#projects");
    if (!repos.length) return;
    renderFilters();
    const shown = repos.filter(r => filter === "all" || r.language === filter);
    const fmt = new Intl.DateTimeFormat(t.locale, { month: "short", year: "numeric" });
    list.innerHTML = shown.length ? shown.map(r => {
      const color = LANG_COLORS[r.language] || "var(--navy)";
      const topics = (r.topics || []).slice(0, 6).map(x => `<li>${esc(x)}</li>`).join("");
      const updated = r.pushed_at ? `<span>${esc(t["projects.updated"])} ${esc(fmt.format(new Date(r.pushed_at)))}</span>` : "";
      const stars = r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : "";
      return `<li class="project" style="--lang-color:${color}">
        <h3><a href="${esc(r.html_url)}" target="_blank" rel="noopener">${esc(r.name.replace(/[-_]/g, " "))}</a></h3>
        ${r.description ? `<p>${esc(r.description)}</p>` : ""}
        ${topics ? `<ul class="topics" aria-label="Temas">${topics}</ul>` : ""}
        <div class="meta">${r.language ? `<span class="lang-name">${esc(r.language)}</span>` : ""}${updated}${stars}</div>
      </li>`;
    }).join("") : `<li class="muted">${esc(t["projects.empty"])}</li>`;
    $("#projectsNote").textContent = usingFallback ? t["projects.fallback"] : "";
  }

  async function loadRepos() {
    $("#projects").innerHTML = Array.from({ length: 3 }, () => '<li class="project skeleton" aria-hidden="true"></li>').join("");
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, { headers: { Accept: "application/vnd.github+json" } });
      if (!res.ok) throw new Error(`GitHub ${res.status}`);
      const data = await res.json();
      repos = data.filter(r => !r.fork && !r.archived && !HIDDEN_REPOS.includes(r.name))
        .sort((a, b) => (b.topics?.length || 0) - (a.topics?.length || 0) || new Date(b.pushed_at) - new Date(a.pushed_at));
      if (!repos.length) throw new Error("sin repos");
      usingFallback = false;
    } catch {
      repos = FALLBACK_REPOS;
      usingFallback = true;
    }
    renderProjects();
  }

  function introSpec() {
    const status = $("#status"), body = $("#specBody");
    if (reduceMotion) return;
    status.textContent = "…";
    status.classList.add("pending");
    body.classList.add("loading");
    setTimeout(() => {
      status.textContent = "200 OK";
      status.classList.remove("pending");
      body.classList.replace("loading", "ready");
    }, 650);
  }

  $("#langToggle").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    store.set("lang", lang);
    applyLang();
  });
  $("#filters").addEventListener("click", e => {
    const b = e.target.closest("button[data-filter]");
    if (!b) return;
    filter = b.dataset.filter;
    renderProjects();
  });
  $("#year").textContent = new Date().getFullYear();

  applyLang();
  introSpec();
  loadRepos();
})();
