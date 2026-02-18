import { Injectable, signal, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class Settings {
  private platformId = inject(PLATFORM_ID);

  readonly language = signal<'es' | 'en'>('es');
  readonly theme = signal<'light' | 'dark'>('dark');

  private readonly translations = {
    es: {
      nav: {
        home: 'Inicio',
        services: 'Servicios',
        portfolio: 'Portafolio',
        blog: 'Blog',
        contact: 'Contacto',
      },
      hero: {
        badge: 'Agencia de Desarrollo',
        title_prefix: 'Creamos Software que',
        title_gradient: 'escala tu negocio.',
        subtitle:
          'En JH Dev Agency combinamos ingeniería de software, automatización con IA y diseño estratégico. Entregas Just-in-Time para mercados globales.',
        cta_primary: 'Iniciar Proyecto',
        cta_secondary: 'Ver Portafolio',
      },
      services: {
        title: 'Nuestras Capacidades',
        subtitle: 'Soluciones técnicas diseñadas para velocidad y escalabilidad.',
        items: [
          {
            title: 'Desarrollo Web High-Performance',
            desc: 'Sitios ultra-rápidos con Next.js y Angular. Puntuación 100/100 en Google PageSpeed garantizada.',
            icon: 'code',
          },
          {
            title: 'Automatización & IA',
            desc: 'Bots de WhatsApp, Agentes de IA y CRMs automatizados para que tu negocio venda 24/7 sin ti.',
            icon: 'cpu',
          },
          {
            title: 'SaaS & Aplicaciones a Medida',
            desc: 'Transformamos tu idea en un producto digital complejo (como PayMind o CardFlow) listo para el mercado.',
            icon: 'layers',
          },
          {
            title: 'Infraestructura & Cloud',
            desc: 'Despliegues en AWS/Vercel, bases de datos Supabase y arquitecturas que no se caen.',
            icon: 'cloud',
          },
        ],
      },
      portfolio: {
        title: 'Proyectos Destacados',
        subtitle: 'Ingeniería aplicada a productos reales. Desde Fintech hasta Automatización.',
        items: [
          {
            id: 'paymind',
            title: 'PayMind',
            desc: 'Aplicación web para la gestión inteligente de tarjetas de crédito y control de deudas.',
            tags: ['Django', 'Python', 'Fintech'],
            image: 'assets/images/paymind-placeholder.jpg',
          },
          {
            id: 'pawmatch',
            title: 'PawMatch',
            desc: 'Plataforma estilo "Tinder" para adopción y emparejamiento de mascotas.',
            tags: ['Next.js', 'Supabase', 'React'],
            image: 'assets/images/pawmatch-placeholder.jpg',
          },
          {
            id: 'cardflow',
            title: 'CardFlow',
            desc: 'Suite financiera para seguimiento de flujo de efectivo y análisis de gastos personales.',
            tags: ['Angular', 'TypeScript', 'Tailwind'],
            image: 'assets/images/cardflow-placeholder.jpg',
          },
          {
            id: 'jh-agency',
            title: 'JH Dev Agency',
            desc: 'Sitio corporativo High-Performance con arquitectura Zoneless y Server-Side Rendering.',
            tags: ['Angular 19', 'SSR', 'Tailwind v4'],
            image: 'assets/images/agency-placeholder.jpg',
          },
        ],
      },
      contact: {
        title: 'Empecemos a trabajar',
        subtitle:
          '¿Listo para escalar? Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.',
        form: {
          name: 'Nombre Completo',
          email: 'Correo Electrónico',
          type: 'Tipo de Proyecto',
          budget: 'Presupuesto Estimado',
          message: 'Detalles del Proyecto',
          btn: 'Enviar Propuesta',
        },
        info: {
          email_label: 'Escríbenos directamente',
          location_label: 'Ubicación',
          location: 'Puebla, México (Global Remote)',
          availability: 'Disponibilidad: Aceptando nuevos proyectos',
        },
      },
      blog: {
        title: 'Ingeniería & Pensamiento',
        subtitle:
          'Artículos sobre desarrollo de software, arquitectura de sistemas y el futuro de la IA.',
        posts: [
          {
            id: 1,
            title: 'Por qué migramos de React a Angular 19 para aplicaciones Enterprise',
            excerpt:
              'Un análisis profundo sobre rendimiento, señales (Signals) y por qué la estructura estricta de Angular ahorra dinero a largo plazo.',
            date: '12 Feb, 2026',
            readTime: '6 min lectura',
            category: 'Arquitectura',
          },
          {
            id: 2,
            title: 'Integrando Agentes de IA en flujos de trabajo tradicionales',
            excerpt:
              'Cómo utilizamos Python y OpenAI para automatizar el 40% de las tareas administrativas de nuestros clientes.',
            date: '28 Ene, 2026',
            readTime: '4 min lectura',
            category: 'Inteligencia Artificial',
          },
          {
            id: 3,
            title: 'Optimizando el Core Web Vitals para e-commerce',
            excerpt:
              'Estrategias avanzadas de carga diferida (Lazy Loading) y renderizado en servidor (SSR) para mejorar el SEO.',
            date: '15 Ene, 2026',
            readTime: '8 min lectura',
            category: 'Performance',
          },
        ],
      },
      footer: {
        tagline: 'Construyendo el futuro digital con código de alto rendimiento.',
        rights: 'Todos los derechos reservados.',
        sections: { company: 'Compañía', legal: 'Legal' },
        links: {
          about: 'Sobre Nosotros',
          careers: 'Carreras',
          privacy: 'Privacidad',
          terms: 'Términos de Uso',
        },
      },
      // --- SECCIÓN NOT FOUND (Que faltaba) ---
      notFound: {
        code: '404',
        title: 'Sistema Fuera de Línea',
        desc: 'La ruta que intentas explorar no existe o ha sido movida. Regresa a la base segura.',
        btn: 'Volver al Dashboard',
      },
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        blog: 'Blog',
        contact: 'Contact',
      },
      hero: {
        badge: 'Development Agency',
        title_prefix: 'We Build Software that',
        title_gradient: 'scales your business.',
        subtitle:
          'At JH Dev Agency we combine software engineering, AI automation, and strategic design. Just-in-Time delivery for global markets.',
        cta_primary: 'Start Project',
        cta_secondary: 'View Portfolio',
      },
      services: {
        title: 'Our Capabilities',
        subtitle: 'Technical solutions designed for speed and scalability.',
        items: [
          {
            title: 'High-Performance Web Dev',
            desc: 'Ultra-fast sites with Next.js & Angular. 100/100 Google PageSpeed score guaranteed.',
            icon: 'code',
          },
          {
            title: 'Automation & AI',
            desc: 'WhatsApp Bots, AI Agents, and automated CRMs so your business sells 24/7 without you.',
            icon: 'cpu',
          },
          {
            title: 'SaaS & Custom Apps',
            desc: 'We transform your idea into a complex digital product (like PayMind or CardFlow) market-ready.',
            icon: 'layers',
          },
          {
            title: 'Infrastructure & Cloud',
            desc: 'Deployments on AWS/Vercel, Supabase databases, and unbreakable architectures.',
            icon: 'cloud',
          },
        ],
      },
      portfolio: {
        title: 'Featured Projects',
        subtitle: 'Engineering applied to real products. From Fintech to Automation.',
        items: [
          {
            id: 'paymind',
            title: 'PayMind',
            desc: 'Web application for intelligent credit card management and debt control.',
            tags: ['Django', 'Python', 'Fintech'],
            image: 'assets/images/paymind-placeholder.jpg',
          },
          {
            id: 'pawmatch',
            title: 'PawMatch',
            desc: '"Tinder-style" platform for pet adoption and matching.',
            tags: ['Next.js', 'Supabase', 'React'],
            image: 'assets/images/pawmatch-placeholder.jpg',
          },
          {
            id: 'cardflow',
            title: 'CardFlow',
            desc: 'Financial suite for cash flow tracking and personal expense analysis.',
            tags: ['Angular', 'TypeScript', 'Tailwind'],
            image: 'assets/images/cardflow-placeholder.jpg',
          },
          {
            id: 'jh-agency',
            title: 'JH Dev Agency',
            desc: 'High-Performance corporate site with Zoneless architecture and Server-Side Rendering.',
            tags: ['Angular 19', 'SSR', 'Tailwind v4'],
            image: 'assets/images/agency-placeholder.jpg',
          },
        ],
      },
      contact: {
        title: "Let's get to work",
        subtitle:
          "Ready to scale? Tell us about your project and we'll get back to you within 24 hours.",
        form: {
          name: 'Full Name',
          email: 'Email Address',
          type: 'Project Type',
          budget: 'Estimated Budget',
          message: 'Project Details',
          btn: 'Send Proposal',
        },
        info: {
          email_label: 'Email us directly',
          location_label: 'Location',
          location: 'Puebla, Mexico (Global Remote)',
          availability: 'Availability: Accepting new projects',
        },
      },
      blog: {
        title: 'Engineering & Thoughts',
        subtitle: 'Articles on software development, system architecture, and the future of AI.',
        posts: [
          {
            id: 1,
            title: 'Why we migrated from React to Angular 19 for Enterprise Apps',
            excerpt:
              "A deep dive into performance, Signals, and why Angular's strict structure saves money in the long run.",
            date: 'Feb 12, 2026',
            readTime: '6 min read',
            category: 'Architecture',
          },
          {
            id: 2,
            title: 'Integrating AI Agents into traditional workflows',
            excerpt:
              "How we use Python and OpenAI to automate 40% of our clients' administrative tasks.",
            date: 'Jan 28, 2026',
            readTime: '4 min read',
            category: 'Artificial Intelligence',
          },
          {
            id: 3,
            title: 'Optimizing Core Web Vitals for E-commerce',
            excerpt:
              'Advanced Lazy Loading and Server-Side Rendering (SSR) strategies to boost SEO.',
            date: 'Jan 15, 2026',
            readTime: '8 min read',
            category: 'Performance',
          },
        ],
      },
      footer: {
        tagline: 'Building the digital future with high-performance code.',
        rights: 'All rights reserved.',
        sections: { company: 'Company', legal: 'Legal' },
        links: {
          about: 'About Us',
          careers: 'Careers',
          privacy: 'Privacy Policy',
          terms: 'Terms of Use',
        },
      },
      // --- SECCIÓN NOT FOUND (EN) ---
      notFound: {
        code: '404',
        title: 'System Offline',
        desc: 'The route you are trying to explore does not exist or has been moved. Return to safety base.',
        btn: 'Return to Dashboard',
      },
    },
  };

  readonly text = computed(() => this.translations[this.language()]);

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const html = document.documentElement;
        if (this.theme() === 'dark') {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        this.theme.set(savedTheme);
      }
    }
  }

  toggleTheme() {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  toggleLang() {
    this.language.update((current) => (current === 'es' ? 'en' : 'es'));
  }
}
