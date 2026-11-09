import type { Repo } from './github.service';

const url = (name: string) => `https://github.com/ilusCode/${name}`;

/** Copia guardada por si la API de GitHub no responde (límite de 60 peticiones por hora sin sesión). */
export const FALLBACK_REPOS: Repo[] = [
  {
    name: 'isw_efm_profile',
    description: 'Sitio personal y currículum de Eduardo Fernández, Senior Backend Engineer y Tech Lead.',
    language: 'TypeScript',
    topics: ['portfolio', 'angular', 'resume', 'vercel', 'github-api'],
  },
  {
    name: 'Notes-manager',
    description: 'API REST con Spring Boot y WebFlux que genera PDFs de notas numeradas a partir de una plantilla.',
    language: 'Java',
    topics: ['spring-boot', 'spring-webflux', 'jasperreports', 'rest-api'],
  },
  {
    name: 'single-sign-on',
    description: 'Servicio de Single Sign-On con FastAPI y MongoDB: registro, login con credenciales cifradas y JWT.',
    language: 'Python',
    topics: ['fastapi', 'mongodb', 'jwt', 'argon2', 'sso'],
  },
  {
    name: 'application-management-api',
    description: 'REST API to manage an application catalog (apps, images and change history) with FastAPI and MongoDB.',
    language: 'Python',
    topics: ['fastapi', 'mongodb', 'docker', 'pytest'],
  },
  {
    name: 'ollama-client-api',
    description: 'API REST en Spring Boot 4 (Java 26 + WebFlux) que expone un endpoint de chat sobre un servidor Ollama local.',
    language: 'Java',
    topics: ['spring-boot', 'ollama', 'llm', 'docker'],
  },
  {
    name: 'dashboard-server',
    description: 'Dashboard en Angular 22 con SSR para gestionar el catálogo de aplicaciones de application-management-api.',
    language: 'TypeScript',
    topics: ['angular', 'angular-ssr', 'express', 'vitest'],
  },
].map((r) => ({ ...r, html_url: url(r.name), pushed_at: null }));
