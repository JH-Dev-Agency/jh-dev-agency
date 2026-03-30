import { Injectable, inject, signal, computed } from '@angular/core';
import { BlogPost, Service, PortfolioItem } from '../models';
import { Settings } from './settings';

/**
 * ContentService — single source of truth for all content data.
 *
 * Currently backed by static data. When a backend is ready, only this service
 * needs to change (inject HttpClient + fetch from API). Components stay untouched.
 *
 * Architecture: Settings handles UI state (theme, language).
 *               ContentService handles data (posts, services, portfolio).
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  private settings = inject(Settings);

  // ── Blog posts ─────────────────────────────────────────────────────────────
  private readonly _posts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'Por qué migramos de React a Angular 19 para aplicaciones Enterprise',
      excerpt:
        'Un análisis sobre rendimiento, arquitectura y por qué Angular 19 se está convirtiendo en una alternativa muy sólida para proyectos grandes.',
      benefit:
        'Ideal para equipos que trabajan en aplicaciones complejas y quieren reducir deuda técnica y costos de mantenimiento.',
      date: '12 Feb, 2026',
      readTime: '6 min lectura',
      category: 'Arquitectura',
      content: [
        {
          type: 'p',
          text: 'Durante años React ha sido una de las herramientas más populares para desarrollar interfaces web modernas. Sin embargo, en proyectos enterprise hemos visto que Angular ofrece ventajas importantes cuando el tamaño del proyecto y del equipo crece.',
        },
        { type: 'h2', text: 'Arquitectura consistente para equipos grandes' },
        {
          type: 'p',
          text: 'Una de las principales ventajas de Angular es su estructura. Mientras que React deja muchas decisiones abiertas, Angular define una arquitectura clara desde el inicio. Esto facilita que equipos grandes puedan colaborar sin generar caos en el código.',
        },
        { type: 'h2', text: 'Angular Signals y rendimiento' },
        {
          type: 'p',
          text: 'Con la llegada de Signals, Angular introduce un modelo reactivo moderno que reduce renders innecesarios y simplifica la gestión del estado. Esto permite aplicaciones más rápidas y predecibles.',
        },
        {
          type: 'p',
          text: 'Para aplicaciones enterprise donde el mantenimiento, la escalabilidad y la estabilidad son críticos, Angular 19 se está convirtiendo en una alternativa cada vez más interesante frente a React.',
        },
      ],
    },
    {
      id: 2,
      title: 'Integrando Agentes de IA en flujos de trabajo tradicionales',
      excerpt:
        'Cómo estamos utilizando agentes de inteligencia artificial para automatizar tareas repetitivas en negocios reales.',
      benefit:
        'Especialmente útil para consultorios, negocios locales y startups que quieren reducir trabajo manual.',
      date: '28 Ene, 2026',
      readTime: '4 min lectura',
      category: 'Inteligencia Artificial',
      content: [
        {
          type: 'p',
          text: 'La inteligencia artificial ya no es solo para grandes empresas. Hoy cualquier negocio puede integrar automatización basada en IA para mejorar su eficiencia.',
        },
        { type: 'h2', text: 'Automatización de tareas repetitivas' },
        {
          type: 'p',
          text: 'Muchos negocios pierden horas en tareas administrativas: responder mensajes, confirmar citas, enviar recordatorios o clasificar clientes potenciales. Estas tareas pueden automatizarse con agentes de IA.',
        },
        { type: 'h2', text: 'IA como asistente operativo' },
        {
          type: 'p',
          text: 'Los agentes de IA pueden actuar como asistentes que responden consultas básicas, gestionan reservas o recopilan información antes de una llamada comercial.',
        },
        {
          type: 'p',
          text: 'En muchos proyectos hemos logrado reducir hasta un 40% del tiempo dedicado a tareas administrativas simplemente automatizando estos procesos.',
        },
      ],
    },
    {
      id: 3,
      title: 'Optimizando Core Web Vitals para mejorar el SEO',
      excerpt:
        'Cómo optimizar velocidad, interactividad y estabilidad visual para mejorar posicionamiento en Google.',
      benefit:
        'Fundamental para negocios que dependen de tráfico orgánico o quieren mejorar conversiones desde su web.',
      date: '15 Ene, 2026',
      readTime: '8 min lectura',
      category: 'Performance',
      content: [
        {
          type: 'p',
          text: 'Google utiliza métricas llamadas Core Web Vitals para medir la experiencia de usuario en un sitio web. Estas métricas influyen directamente en el posicionamiento en buscadores.',
        },
        { type: 'h2', text: 'LCP — Largest Contentful Paint' },
        {
          type: 'p',
          text: 'Esta métrica mide cuánto tarda en mostrarse el contenido principal de una página. Optimizar imágenes, reducir scripts innecesarios y usar renderizado eficiente puede mejorar significativamente este valor.',
        },
        { type: 'h2', text: 'CLS — Cumulative Layout Shift' },
        {
          type: 'p',
          text: 'El CLS mide cuánto se mueve el contenido mientras la página carga. Reservar espacio para imágenes y evitar cargas tardías ayuda a mejorar esta métrica.',
        },
        {
          type: 'p',
          text: 'Optimizar Core Web Vitals no solo mejora el SEO, también mejora la experiencia del usuario y aumenta la probabilidad de conversión.',
        },
      ],
    },
  ]);

  // ── Portfolio ──────────────────────────────────────────────────────────────
  private readonly _portfolio = signal<PortfolioItem[]>([
    {
      id: 'otorrino-tlaxcala',
      title: 'Clínica de Otorrinolaringología · Tlaxcala',
      category: 'Cliente real · Sitio web profesional',
      desc: 'Desarrollo de sitio web moderno para consultorio de otorrinolaringología enfocado en generar confianza en pacientes y facilitar el contacto directo desde internet.',
      result: 'Presencia profesional en línea y canal directo para consultas y citas médicas.',
      tags: ['Angular', 'SEO Local', 'Web Performance'],
      image: 'assets/portfolio/otorrinotlaxcala.webp',
    },
  ]);

  // ── Public computed signals ────────────────────────────────────────────────

  /** All blog posts */
  readonly posts = this._posts.asReadonly();

  /** All portfolio items */
  readonly portfolio = this._portfolio.asReadonly();

  /** Get a post by id */
  getPostById(id: number): BlogPost | undefined {
    return this._posts().find((p) => p.id === id);
  }

  /** Get portfolio item by id */
  getPortfolioItem(id: string): PortfolioItem | undefined {
    return this._portfolio().find((p) => p.id === id);
  }

  /**
   * Future: swap with HTTP call when backend is ready.
   * Example:
   *   async loadPosts(): Promise<void> {
   *     const posts = await this.http.get<BlogPost[]>('/api/posts').toPromise();
   *     this._posts.set(posts ?? []);
   *   }
   */
}
