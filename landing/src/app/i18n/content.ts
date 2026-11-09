export type Lang = 'es' | 'en';

export interface Job {
  role: string;
  company: string;
  when: string;
  items: string[];
}

export interface Content {
  locale: string;
  langToggleLabel: string;
  skip: string;
  nav: { experience: string; projects: string; skills: string; contact: string };
  hero: { role: string; lead: string; cv: string; mail: string; photoAlt: string; specLabel: string };
  spec: Record<string, string | string[]>;
  profile: { title: string; body: string };
  experience: { title: string; jobs: Job[]; degree: string; school: string; schoolWhen: string };
  projects: {
    title: string;
    sub: string;
    all: string;
    allFilter: string;
    updated: string;
    fallback: string;
    empty: string;
    filterLabel: string;
    topicsLabel: string;
  };
  skills: { title: string; groups: [string, string][]; langsTitle: string; langsBody: string };
  contact: { title: string; body: string; city: string; cvs: string };
  cvFiles: { label: string; file: string }[];
  cvPrimary: string;
}

const CV = 'assets/cv/';

export const CONTENT: Record<Lang, Content> = {
  es: {
    locale: 'es-MX',
    langToggleLabel: 'Switch to English',
    skip: 'Saltar al contenido',
    nav: { experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', contact: 'Contacto' },
    hero: {
      role: 'Senior Backend Engineer y Tech Lead',
      lead: 'Diseño y construyo APIs que conectan las capas de un sistema: del contrato en OAS o RAML al servicio en producción, con Java, Kotlin, Spring y MuleSoft.',
      cv: 'Descargar CV',
      mail: 'Escríbeme',
      photoAlt: 'Foto de Eduardo Fernández',
      specLabel: 'Resumen del perfil en formato de respuesta de API',
    },
    spec: {
      rol: 'Senior Backend Engineer',
      experiencia: '6+ años',
      empresa_actual: 'Hitss Solution',
      stack: ['Java', 'Kotlin', 'Spring', 'MuleSoft'],
      contratos: ['OAS 3', 'RAML'],
      infra: ['Kubernetes', 'OpenShift', 'AWS'],
      busca: ['Senior Backend', 'Tech Lead'],
      ubicacion: 'Toluca, México',
    },
    profile: {
      title: 'Perfil',
      body: 'Ingeniero de Software con más de 6 años de experiencia diseñando y desarrollando APIs y servicios backend escalables. Soy el punto de contacto técnico entre Arquitectura y los equipos de Backend, y he trabajado como Tech Lead coordinando equipos, traduciendo requerimientos de negocio en soluciones técnicas y entregando en tiempo. Me enfoco en calidad de código, soporte a producción y mejora continua en entornos con Kubernetes, OpenShift, AWS y CI/CD. En el último año integré herramientas de IA (Claude, GitHub Copilot) al flujo de desarrollo para acelerar las entregas.',
    },
    experience: {
      title: 'Experiencia',
      jobs: [
        {
          role: 'Senior Backend Engineer',
          company: 'Hitss Solution',
          when: 'Ago 2022 – hoy',
          items: [
            'Punto de contacto técnico entre Arquitectura y los equipos de Backend, alineando las definiciones de diseño con la implementación.',
            'Diseño de más de 10 APIs entre las capas de la arquitectura, con contratos en OAS (OpenAPI) y RAML, que sustentaron los últimos 2 proyectos.',
            'Desarrollo de más de 10 APIs con Java, Kotlin y MuleSoft, con pruebas unitarias y carga de configuraciones.',
            'Elaboración de ATD (documentos técnicos) con especificaciones de lógica, diagramas y diseño de APIs.',
            'Análisis de requerimientos para traducir necesidades de negocio en soluciones técnicas.',
            'Monitoreo de logs en desarrollo y producción, y resolución de incidentes productivos que afectan a clientes.',
          ],
        },
        {
          role: 'Backend Developer & Tech Lead',
          company: 'GFT',
          when: 'Ene 2020 – Ago 2022',
          items: [
            'Desarrollo de APIs con Java y Spring Framework.',
            'Liderazgo y coordinación del equipo de desarrollo para cumplir objetivos y fechas de entrega.',
            'Análisis de requerimientos y diseño de soluciones técnicas alineadas al negocio.',
          ],
        },
      ],
      degree: 'Ingeniería en Software',
      school: 'UAEMex, Tianguistenco',
      schoolWhen: '2015 – 2020',
    },
    projects: {
      title: 'Proyectos en GitHub',
      sub: 'Repositorios públicos, cargados en vivo desde GitHub.',
      all: 'Ver perfil en GitHub',
      allFilter: 'Todos',
      updated: 'Actualizado',
      fallback: 'No se pudo consultar GitHub en este momento; se muestra una copia guardada de los repositorios.',
      empty: 'No hay proyectos con ese lenguaje.',
      filterLabel: 'Filtrar por lenguaje',
      topicsLabel: 'Temas',
    },
    skills: {
      title: 'Habilidades',
      groups: [
        ['Lenguajes', 'Java, Kotlin, Python, Go'],
        ['Frameworks e integración', 'Spring, MuleSoft, Flask, FastAPI'],
        ['Mensajería', 'RabbitMQ, IBM MQ'],
        ['Bases de datos', 'Oracle, MySQL, MongoDB, Redis, Firebase'],
        ['Cloud y DevOps', 'AWS, Kubernetes, OpenShift, Jenkins, Git, Maven, Gradle, Nexus'],
        ['Calidad y monitoreo', 'JUnit, Selenium, SonarQube, Veracode, Splunk'],
        ['IA aplicada al desarrollo', 'Claude, GitHub Copilot, plataformas de IA del cliente'],
        ['Metodologías', 'Scrum'],
      ],
      langsTitle: 'Idiomas',
      langsBody: 'Español nativo, inglés conversacional',
    },
    contact: {
      title: 'Hablemos',
      body: 'Busco posiciones como Senior Backend Engineer o Tech Lead. Escríbeme y te respondo pronto.',
      city: 'Toluca, México',
      cvs: 'Descarga mi CV',
    },
    cvFiles: [
      { label: 'Español', file: CV + 'CV_Eduardo_Fernandez_Diseno.pdf' },
      { label: 'Español, texto simple', file: CV + 'CV_Eduardo_Fernandez.pdf' },
      { label: 'Inglés', file: CV + 'Resume_Eduardo_Fernandez_EN.pdf' },
      { label: 'Inglés, texto simple', file: CV + 'Resume_Eduardo_Fernandez_EN_ATS.pdf' },
    ],
    cvPrimary: CV + 'CV_Eduardo_Fernandez_Diseno.pdf',
  },

  en: {
    locale: 'en-US',
    langToggleLabel: 'Cambiar a español',
    skip: 'Skip to content',
    nav: { experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    hero: {
      role: 'Senior Backend Engineer and Tech Lead',
      lead: "I design and build the APIs that connect a system's layers: from the OAS or RAML contract to the service in production, with Java, Kotlin, Spring, and MuleSoft.",
      cv: 'Download resume',
      mail: 'Email me',
      photoAlt: 'Photo of Eduardo Fernández',
      specLabel: 'Profile summary shown as an API response',
    },
    spec: {
      role: 'Senior Backend Engineer',
      experience: '6+ years',
      current_company: 'Hitss Solution',
      stack: ['Java', 'Kotlin', 'Spring', 'MuleSoft'],
      contracts: ['OAS 3', 'RAML'],
      infra: ['Kubernetes', 'OpenShift', 'AWS'],
      open_to: ['Senior Backend', 'Tech Lead'],
      location: 'Toluca, Mexico',
    },
    profile: {
      title: 'Profile',
      body: "Software Engineer with 6+ years of experience designing and building scalable APIs and backend services. I'm the technical liaison between Architecture and Backend teams, and I've worked as a Tech Lead coordinating teams, translating business requirements into technical solutions, and delivering on schedule. I focus on code quality, production support, and continuous improvement in Kubernetes, OpenShift, AWS, and CI/CD environments. Over the past year I've integrated AI tools (Claude, GitHub Copilot) into the development workflow to speed up delivery.",
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          role: 'Senior Backend Engineer',
          company: 'Hitss Solution',
          when: 'Aug 2022 – now',
          items: [
            'Technical liaison between Architecture and Backend teams, aligning design decisions with implementation.',
            'Designed 10+ APIs across architecture layers, with contracts in OAS (OpenAPI) and RAML, forming the backbone of the last 2 projects.',
            'Developed 10+ APIs with Java, Kotlin, and MuleSoft, including unit tests and configuration management.',
            'Authored ATDs (technical design documents) with logic specifications, diagrams, and API design.',
            'Requirements analysis to translate business needs into technical solutions.',
            'Monitored logs in development and production, and resolved customer-impacting production incidents.',
          ],
        },
        {
          role: 'Backend Developer & Tech Lead',
          company: 'GFT',
          when: 'Jan 2020 – Aug 2022',
          items: [
            'Developed APIs with Java and the Spring Framework.',
            'Led and coordinated the development team to meet goals and delivery deadlines.',
            'Performed requirements analysis and designed technical solutions aligned with the business.',
          ],
        },
      ],
      degree: 'B.S. in Software Engineering',
      school: 'UAEMex, Tianguistenco',
      schoolWhen: '2015 – 2020',
    },
    projects: {
      title: 'Projects on GitHub',
      sub: 'Public repositories, loaded live from GitHub.',
      all: 'View GitHub profile',
      allFilter: 'All',
      updated: 'Updated',
      fallback: "GitHub couldn't be reached right now; showing a saved copy of the repositories.",
      empty: 'No projects in that language.',
      filterLabel: 'Filter by language',
      topicsLabel: 'Topics',
    },
    skills: {
      title: 'Skills',
      groups: [
        ['Languages', 'Java, Kotlin, Python, Go'],
        ['Frameworks & integration', 'Spring, MuleSoft, Flask, FastAPI'],
        ['Messaging', 'RabbitMQ, IBM MQ'],
        ['Databases', 'Oracle, MySQL, MongoDB, Redis, Firebase'],
        ['Cloud & DevOps', 'AWS, Kubernetes, OpenShift, Jenkins, Git, Maven, Gradle, Nexus'],
        ['Quality & monitoring', 'JUnit, Selenium, SonarQube, Veracode, Splunk'],
        ['AI-assisted development', 'Claude, GitHub Copilot, client in-house AI platforms'],
        ['Methodologies', 'Scrum'],
      ],
      langsTitle: 'Languages',
      langsBody: 'Spanish (native), English (conversational)',
    },
    contact: {
      title: "Let's talk",
      body: "I'm looking for Senior Backend Engineer or Tech Lead roles. Send me an email and I'll get back to you soon.",
      city: 'Toluca, Mexico',
      cvs: 'Download my resume',
    },
    cvFiles: [
      { label: 'Spanish', file: CV + 'CV_Eduardo_Fernandez_Diseno.pdf' },
      { label: 'Spanish, plain text', file: CV + 'CV_Eduardo_Fernandez.pdf' },
      { label: 'English', file: CV + 'Resume_Eduardo_Fernandez_EN.pdf' },
      { label: 'English, plain text', file: CV + 'Resume_Eduardo_Fernandez_EN_ATS.pdf' },
    ],
    cvPrimary: CV + 'Resume_Eduardo_Fernandez_EN.pdf',
  },
};

export const CONTACT = {
  email: 'isw_efm@icloud.com',
  linkedin: 'https://www.linkedin.com/in/eduardo-fernandez-morales/',
  github: 'https://github.com/ilusCode',
};
