import { Injectable, signal, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class Settings {
  // <--- CORRECCIÓN 1: Nombre correcto de la clase
  private platformId = inject(PLATFORM_ID);

  readonly language = signal<'es' | 'en'>('es');
  readonly theme = signal<'light' | 'dark'>('dark');

  private readonly translations = {
    es: {
      brandName: 'JH Dev Agency',
      brandShort: 'Dev Agency',
      nav: {
        home: 'Inicio',
        services: 'Servicios',
        portfolio: 'Portafolio',
        blog: 'Blog',
        contact: 'Contacto',
      },
      home: {
        hero: {
          badge: 'Agencia de desarrollo · Alto rendimiento',
          title_prefix: 'Software que acelera tu negocio',
          title_gradient: 'Menos tiempo perdido. Más ventas. Menos errores.',
          subtitle:
            'En JH Dev Agency construimos webs que cargan al instante, automatizamos lo repetitivo con IA y llevamos tu producto SaaS desde la idea hasta un MVP listo para invertir. Entregas claras y a tiempo.',
          cta_primary: 'Agendar una llamada',
          cta_secondary: 'Ver proyectos',
        },
        stack_label: 'Construido con tecnologías de alto rendimiento',
        expertise: {
          label: 'Servicios',
          title: 'Soluciones que se traducen en resultados',
          services_link: 'Ver todos los servicios',
          cards: [
            {
              title: 'Desarrollo Web',
              desc: 'Webs y aplicaciones que cargan en segundos y convierten mejor. Menos rebote, más leads y una imagen seria para tu consultorio o negocio.',
              bullets: [
                'Sitios ultrarrápidos que mejoran tu posicionamiento en Google y reducen la tasa de rebote.',
                'Ejemplo: clínica o negocio local con web profesional que capta citas y consultas sin depender solo de redes sociales.',
              ],
            },
            {
              title: 'Automatización e IA',
              desc: 'Menos horas en tareas repetitivas y más tiempo para lo que importa. Reservas, recordatorios, respuestas a clientes y ventas asistidas por IA, sin que tengas que estar detrás de la pantalla.',
              bullets: [
                'Automatización de citas, recordatorios y seguimiento: menos no-shows y más control de tu agenda.',
                'Ejemplo: consultorio o negocio que atiende consultas y reservas 24/7 con bots y agentes de IA.',
              ],
            },
            {
              title: 'Productos SaaS',
              desc: 'Tu idea convertida en producto digital listo para usuarios e inversión. MVP con arquitectura sólida, panel de administración y flujos de pago, para que puedas validar y escalar sin rehacer todo.',
              bullets: [
                'MVP listo para recibir usuarios y métricas claras para presentar a inversores o socios.',
                'Ejemplo: startup o negocio con producto digital (suscripciones, gestión, herramientas) que necesita lanzar rápido y con calidad.',
              ],
            },
          ],
        },
        proof_social: {
          title: 'Confiado por negocios que priorizan resultados',
          supporting_text:
            'Trabajamos con consultorios privados, negocios locales con ambición de crecer y equipos que están construyendo su primer producto SaaS. Ingeniería seria, sin humo.',
          cases: [
            'Clínica privada — Web profesional + automatización de citas y recordatorios → +40% de reservas en 3 meses.',
            'Negocio local — Tienda online rápida + integración de pagos → menos errores en pedidos y más ventas desde la web.',
            'Startup SaaS — MVP de producto con panel de administración y suscripciones → listo para primeros usuarios e inversión en 12 semanas.',
          ],
          why_us:
            'Ingeniería de alto rendimiento: entregas a tiempo, código mantenible y enfoque en lo que impacta tu negocio — más ventas, menos horas manuales, más control.',
        },
        cta_banner: {
          title: '¿Listo para dar el siguiente paso?',
          desc: 'Cuéntanos tu proyecto en una llamada breve. Sin compromiso. Definimos alcance, plazos y siguiente paso en menos de 30 minutos.',
          btn: 'Agendar una llamada',
          terminal: [
            '> Conexión con JH Dev Agency establecida',
            '> Análisis de requerimientos: en espera de tu llamada',
            '> Próximo paso: agendar reunión de 30 min',
          ],
        },
      },
      services: {
        title: 'Soluciones que impactan ventas, tiempo y control',
        subtitle:
          'Webs rápidas, procesos automatizados y productos digitales que reducen horas manuales, generan más leads y te dan el control. Tecnología pensada para que tu negocio escale sin fallos.',
        more_info: 'Más información',
        items: [
          {
            slug: 'web-development',
            title: 'Desarrollo Web de Alto Rendimiento',
            desc: 'Sitios y aplicaciones ultrarrápidos con stack moderno (Angular, Next.js) y puntuación óptima en Google. Menos rebote, mejor posicionamiento y más consultas o ventas desde la web. Tu consultorio o negocio se ve profesional y responde al instante.',
            use_case: 'Clínica o negocio local que quiere captar citas y leads desde la web sin depender solo de redes o llamadas.',
            icon: 'code',
            details: {
              intro:
                'No hacemos sitios que solo se ven bien. Construimos webs que cargan al instante, mejoran tu posición en Google y convierten visitantes en citas o ventas. Menos rebote, más leads y una imagen seria para tu negocio.',
              proof_line:
                'Ejemplo: clínica privada o negocio local que pasa de depender de llamadas y redes a recibir reservas y consultas desde la web, con menos tiempo perdido y más control.',
              features: [
                'Arquitectura rápida y escalable (SPA/SSR): tu web responde al instante y aguanta más visitas sin ralentizarse.',
                'SEO técnico para que te encuentren en Google cuando buscan tus servicios o zona, no solo tu nombre.',
                'Diseño mobile first para que funcione en cualquier dispositivo y no pierdas leads que entran desde el móvil.',
                'Integración con sistemas de reservas o formularios de contacto para que cada visita se convierta en cita o lead capturado.',
              ],
              cta: 'Auditar mi sitio actual',
              cta_subline:
                'Incluye: velocidad de carga, SEO técnico, uso en móvil y claridad del mensaje. Sin compromiso.',
            },
          },
          {
            slug: 'ai-automation',
            title: 'Automatización e IA',
            desc: 'Bots de WhatsApp, agentes de IA y flujos automatizados para reservas, recordatorios y respuestas a clientes. Tu negocio atiende 24/7 con menos horas manuales y menos errores de captura. Menos no-shows y menos llamadas repetitivas.',
            use_case: 'Consultorio o negocio que necesita automatizar citas, recordatorios y primeras respuestas a pacientes o clientes.',
            icon: 'cpu',
            details: {
              intro:
                'Automatizamos lo repetitivo para que dediques tiempo a lo que realmente importa. Reservas, recordatorios y respuestas a consultas funcionan solos, sin que tengas que estar detrás de la pantalla. Menos no-shows, menos errores administrativos y más control de tu agenda y ventas.',
              proof_line:
                'Ejemplo: consultorio privado que reduce citas perdidas en un 60% gracias a recordatorios automáticos por WhatsApp y responde consultas básicas 24/7 sin que el médico esté disponible.',
              features: [
                'Chatbots y respuestas automáticas 24/7 para que ningún mensaje quede sin respuesta, aunque tú no estés conectado, y cada consulta se convierta en cita o lead.',
                'Recordatorios de citas por WhatsApp o email para reducir ausencias y organizar mejor tu día, sin tener que llamar manualmente a cada paciente.',
                'Automatización de facturación y correos para que factures y envíes documentos sin perder tiempo en tareas repetitivas que la IA puede hacer por ti.',
                'Agentes de IA para calificar leads y seguir ventas automáticamente, identificando quién está más cerca de contratar y priorizando tu tiempo.',
              ],
              cta: 'Automatizar mi negocio',
              cta_subline:
                'Revisamos qué procesos puedes automatizar (citas, recordatorios, respuestas, facturación) y te proponemos un plan. Sin compromiso.',
            },
          },
          {
            slug: 'saas-product',
            title: 'SaaS y Aplicaciones a Medida',
            desc: 'Transformamos tu idea en un producto digital listo para usuarios e inversión: plataformas de gestión, herramientas con suscripciones o flujos de pago. MVP con arquitectura sólida, panel de administración y métricas claras. Validás sin rehacer todo.',
            use_case: 'Startup o negocio que lanza su primer producto digital (gestión, pagos, suscripciones) y necesita algo listo para crecer y presentar a inversores.',
            icon: 'layers',
            details: {
              intro:
                'Llevamos tu idea desde el papel hasta un MVP sólido que puedas lanzar a primeros usuarios y mostrar a inversores. Plataformas de gestión, herramientas con suscripciones o flujos de pago. Construimos la base correcta desde el inicio para que valides y escales sin tener que reescribir todo más adelante.',
              proof_line:
                'Ejemplo: plataforma de reservas con suscripción mensual para profesionales que necesitan cobrar y gestionar citas online, lista para recibir usuarios y presentar métricas claras a inversores.',
              features: [
                'Backend robusto (Django, Node) y bases de datos escalables para que tu producto sea estable, seguro y pueda crecer sin caídas ni problemas de rendimiento cuando tengas más usuarios.',
                'Panel de administración para que controles usuarios, pagos y métricas sin depender de un desarrollador cada vez que necesites hacer un ajuste o ver cómo va tu negocio.',
                'Integración de pagos (Stripe, PayPal) y suscripciones para que cobres de forma segura y automatizada, sin preocuparte por la seguridad de los datos de tus clientes.',
                'Arquitectura preparada para crecer con más usuarios, nuevas funcionalidades y campañas de marketing sin tener que reescribir el código base cuando quieras escalar.',
              ],
              cta: 'Cotizar mi aplicación',
              cta_subline:
                'Te damos una estimación clara de tiempos, costo y fases para lanzar tu MVP. Sin compromiso.',
            },
          },
          {
            slug: 'cloud-infrastructure',
            title: 'Infraestructura y Cloud',
            desc: 'Despliegues en servidores seguros, bases de datos SQL y arquitecturas que no se caen. Tu software corre rápido y estable; menos caídas, más confianza para tus clientes y para vos.',
            use_case: 'Negocio o producto SaaS que ya tiene una aplicación y necesita que sea estable, segura y escalable sin preocuparse por servidores.',
            icon: 'cloud',
            details: {
              intro:
                'Tu software vive en la nube. Nos encargamos de que sea seguro, rápido y estable: menos caídas en horas críticas, mejor desempeño aunque crezca el tráfico, y backups automáticos para que nunca pierdas datos. Sin que tengas que preocuparte por servidores ni tráfico, tú te enfocas en tu negocio y nosotros en que todo funcione.',
              proof_line:
                'Ejemplo: plataforma de reservas que pasa de caerse en horas pico a soportar campañas de anuncios sin interrupciones, con backups automáticos y monitoreo que detecta problemas antes de que afecten a los usuarios.',
              features: [
                'Configuración en AWS o Google Cloud para que tu sitio o app se mantenga estable bajo tráfico alto y puedas escalar cuando lo necesites sin interrupciones.',
                'Bases de datos MySQL/PostgreSQL y backups automáticos para que tus datos estén siempre respaldados y puedas recuperarlos si algo falla, sin perder información de tus clientes.',
                'Contenedores (Docker) y orquestación cuando hace falta para que los despliegues sean más seguros y repetibles, sin sorpresas cada vez que actualizas tu aplicación.',
                'Seguridad y monitoreo para que detectemos problemas antes de que el cliente se queje, y puedas dormir tranquilo sabiendo que todo está funcionando correctamente.',
              ],
              cta: 'Mejorar mi infraestructura',
              cta_subline:
                'Revisamos tu infraestructura actual (cloud, base de datos, seguridad) y te proponemos un plan de mejora. Sin compromiso.',
            },
          },
        ],
      },
      portfolio: {
        label: 'Portafolio',
        title: 'Proyectos Destacados',
        preview_suffix: 'Vista previa',
        subtitle:
          'Productos reales que construimos: finanzas personales, adopción, SaaS y sitios corporativos de alto rendimiento. Ingeniería aplicada a resultados.',
        items: [
          {
            id: 'paymind',
            title: 'PayMind',
            category: 'Finanzas personales / Fintech',
            desc: 'Aplicación web para la gestión inteligente de tarjetas de crédito y control de deudas.',
            result: 'Para usuarios con múltiples tarjetas que buscan mejor control de deudas y pagos a tiempo.',
            tags: ['Django', 'Python', 'Fintech'],
            image: 'assets/images/paymind-placeholder.jpg',
          },
          {
            id: 'pawmatch',
            title: 'PawMatch',
            category: 'Adopción / ONG',
            desc: 'Plataforma estilo "Tinder" para adopción y emparejamiento de mascotas.',
            result: 'Para refugios y adoptantes: adopciones más rápidas y mejor emparejamiento entre mascotas y familias.',
            tags: ['Next.js', 'Supabase', 'React'],
            image: 'assets/images/pawmatch-placeholder.jpg',
          },
          {
            id: 'cardflow',
            title: 'CardFlow',
            category: 'Finanzas personales',
            desc: 'Suite financiera para seguimiento de flujo de efectivo y análisis de gastos personales.',
            result: 'Para personas y equipos que necesitan claridad sobre gastos y flujo de caja sin depender de hojas de cálculo.',
            tags: ['Angular', 'TypeScript', 'Tailwind'],
            image: 'assets/images/cardflow-placeholder.jpg',
          },
          {
            id: 'jh-agency',
            title: 'JH Dev Agency',
            category: 'Sitio corporativo B2B',
            desc: 'Sitio corporativo de alto rendimiento con arquitectura moderna (SSR, Zoneless).',
            result: 'Para la agencia: mejor imagen, velocidad y credibilidad ante clientes B2B.',
            tags: ['Angular 19', 'SSR', 'Tailwind v4'],
            image: 'assets/images/agency-placeholder.jpg',
          },
        ],
      },
      contact: {
        title: 'Agenda una llamada',
        subtitle:
          'Cuéntanos brevemente tu proyecto. Te respondemos en menos de 24 horas y, si encaja, coordinamos una llamada de 30 minutos para definir alcance, tiempos y siguientes pasos.',
        subtitle_extra:
          'Sin compromiso: es una llamada exploratoria para conocernos y ver si podemos ayudarte.',
        form: {
          name: 'Nombre Completo',
          email: 'Correo Electrónico',
          type: 'Tipo de Proyecto',
          type_help: 'Ej: sitio para tu consultorio, automatización de reservas, plataforma SaaS, etc.',
          budget: 'Presupuesto Estimado',
          budget_help: 'Si aún no tienes claro el presupuesto, elige "Por definir" y lo vemos en la llamada.',
          message: 'Detalles del Proyecto',
          message_placeholder: 'Cuéntanos qué hace tu negocio, qué problema quieres resolver y en qué plazo te gustaría lanzar.',
          btn: 'Solicitar llamada de 30 min',
          after_submit: 'Te responderemos en menos de 24 horas con los siguientes pasos para tu proyecto.',
        },
        info: {
          email_label: 'Escríbenos directamente',
          location_label: 'Ubicación',
          location: 'Puebla, México (Global Remote)',
          availability_label: 'Disponibilidad',
          availability: 'Aceptando nuevos proyectos',
          scope_global: 'Trabajamos con clientes en México y otros países de habla hispana.',
        },
      },
      blog: {
        title: 'Ingeniería & Pensamiento',
        subtitle:
          'Ideas, casos reales y estrategias sobre cómo usamos software, arquitectura e IA para hacer negocios más eficientes. Para dueños de negocio, founders y equipos técnicos.',
        author_line:
          'Escrito por José Horacio, ingeniero de software especializado en aplicaciones high-performance y automatización con IA.',
        posts: [
          {
            id: 1,
            title: 'Por qué migramos de React a Angular 19 para aplicaciones Enterprise',
            excerpt:
              'Un análisis profundo sobre rendimiento, señales (Signals) y por qué la estructura estricta de Angular ahorra dinero a largo plazo.',
            benefit:
              'Ideal para equipos que necesitan aplicaciones estables a largo plazo y quieren reducir costos de mantenimiento.',
            date: '12 Feb, 2026',
            readTime: '6 min lectura',
            category: 'Arquitectura',
          },
          {
            id: 2,
            title: 'Integrando Agentes de IA en flujos de trabajo tradicionales',
            excerpt:
              'Cómo utilizamos Python y OpenAI para automatizar el 40% de las tareas administrativas de nuestros clientes.',
            benefit:
              'Pensado para consultorios y negocios que quieren reducir tareas administrativas sin contratar más personal.',
            date: '28 Ene, 2026',
            readTime: '4 min lectura',
            category: 'Inteligencia Artificial',
          },
          {
            id: 3,
            title: 'Optimizando el Core Web Vitals para e-commerce',
            excerpt:
              'Estrategias avanzadas de carga diferida (Lazy Loading) y renderizado en servidor (SSR) para mejorar el SEO.',
            benefit:
              'Útil para e-commerce que quieren más ventas desde Google y menos usuarios abandonando por lentitud.',
            date: '15 Ene, 2026',
            readTime: '8 min lectura',
            category: 'Performance',
          },
        ],
      },
      footer: {
        tagline: 'Software de alto rendimiento para negocios que quieren crecer.',
        rights: 'Todos los derechos reservados.',
        sections: { company: 'Compañía', legal: 'Legal' },
        links: {
          about: 'Sobre Nosotros',
          careers: 'Carreras',
          privacy: 'Privacidad',
          terms: 'Términos de Uso',
        },
      },
      notFound: {
        // Esta es la correcta
        code: '404',
        title: 'Sistema Fuera de Línea',
        desc: 'La ruta que intentas explorar no existe o ha sido movida. Regresa a la base segura.',
        btn: 'Volver al Dashboard',
      },
    },
    en: {
      brandName: 'JH Dev Agency',
      brandShort: 'Dev Agency',
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        blog: 'Blog',
        contact: 'Contact',
      },
      home: {
        hero: {
          badge: 'Development agency · High performance',
          title_prefix: 'Software that accelerates your business',
          title_gradient: 'Less time wasted. More sales. Fewer errors.',
          subtitle:
            'At JH Dev Agency we build websites that load instantly, automate the repetitive with AI, and take your SaaS product from idea to investment-ready MVP. Clear delivery, on time.',
          cta_primary: 'Schedule a call',
          cta_secondary: 'View projects',
        },
        stack_label: 'Built with high-performance technologies',
        expertise: {
          label: 'Services',
          title: 'Solutions that translate into results',
          services_link: 'View all services',
          cards: [
            {
              title: 'Web Development',
              desc: 'Websites and apps that load in seconds and convert better. Less bounce, more leads, and a professional image for your practice or business.',
              bullets: [
                'Ultra-fast sites that improve your Google ranking and reduce bounce rate.',
                'Example: clinic or local business with a professional web that captures appointments and inquiries without relying only on social media.',
              ],
            },
            {
              title: 'Automation & AI',
              desc: 'Fewer hours on repetitive tasks and more time for what matters. Bookings, reminders, customer replies, and AI-assisted sales—without you being behind the screen.',
              bullets: [
                'Automation of appointments, reminders and follow-up: fewer no-shows and more control over your schedule.',
                'Example: practice or business that handles inquiries and bookings 24/7 with bots and AI agents.',
              ],
            },
            {
              title: 'SaaS Products',
              desc: 'Your idea turned into a digital product ready for users and investment. MVP with solid architecture, admin panel and payment flows, so you can validate and scale without rebuilding.',
              bullets: [
                'MVP ready for users and clear metrics to present to investors or partners.',
                'Example: startup or business with a digital product (subscriptions, management, tools) that needs to launch fast and with quality.',
              ],
            },
          ],
        },
        proof_social: {
          title: 'Trusted by businesses that prioritize results',
          supporting_text:
            'We work with private practices, local businesses with ambition to grow, and teams building their first SaaS product. Serious engineering, no fluff.',
          cases: [
            'Private clinic — Professional web + appointment and reminder automation → +40% bookings in 3 months.',
            'Local business — Fast online store + payment integration → fewer order errors and more sales from the web.',
            'SaaS startup — Product MVP with admin panel and subscriptions → ready for first users and investment in 12 weeks.',
          ],
          why_us:
            'High-performance engineering: on-time delivery, maintainable code, and focus on what impacts your business—more sales, fewer manual hours, more control.',
        },
        cta_banner: {
          title: 'Ready to take the next step?',
          desc: 'Tell us about your project in a short call. No commitment. We define scope, timeline and next step in under 30 minutes.',
          btn: 'Schedule a call',
          terminal: [
            '> Connection to JH Dev Agency established',
            '> Requirements analysis: awaiting your call',
            '> Next step: schedule 30-min meeting',
          ],
        },
      },
      services: {
        title: 'Solutions that impact sales, time, and control',
        subtitle:
          'Fast websites, automated processes, and digital products that cut manual hours, generate more leads, and give you control. Technology built so your business can scale without failures.',
        more_info: 'More information',
        items: [
          {
            slug: 'web-development',
            title: 'High-Performance Web Development',
            desc: 'Ultra-fast sites and apps with modern stack (Angular, Next.js) and strong Google scores. Less bounce, better ranking, and more inquiries or sales from the web. Your practice or business looks professional and responds in an instant.',
            use_case: 'Clinic or local business that wants to capture appointments and leads from the web without relying only on social or phone calls.',
            icon: 'code',
            details: {
              intro:
                "We don't just make sites that look good. We build websites that load instantly, improve your Google ranking, and turn visitors into appointments or sales. Less bounce, more leads, and a serious image for your business.",
              proof_line:
                'Example: private clinic or local business that moves from relying on calls and social to receiving bookings and inquiries from the web, with less time wasted and more control.',
              features: [
                'Fast, scalable architecture (SPA/SSR): your site responds in an instant and handles more traffic without slowing down.',
                'Technical SEO so you get found on Google when people search for your services or area, not just your name.',
                'Mobile-first design so it works on any device and you don\'t lose leads who visit from their phone.',
                'Integration with booking systems or contact forms so every visit can turn into an appointment or captured lead.',
              ],
              cta: 'Audit my site',
              cta_subline:
                'Includes: load speed, technical SEO, mobile experience, and message clarity. No commitment.',
            },
          },
          {
            slug: 'ai-automation',
            title: 'Automation & AI',
            desc: 'WhatsApp bots, AI agents, and automated flows for bookings, reminders, and customer replies. Your business runs 24/7 with fewer manual hours and fewer data-entry errors. Fewer no-shows and fewer repetitive calls.',
            use_case: 'Practice or business that needs to automate appointments, reminders, and first responses to patients or customers.',
            icon: 'cpu',
            details: {
              intro:
                'We automate the repetitive so you can focus on what really matters. Bookings, reminders, and answers to inquiries run on their own, without you being behind the screen. Fewer no-shows, fewer administrative errors, and more control over your schedule and sales.',
              proof_line:
                'Example: private practice that reduces missed appointments by 60% thanks to automatic WhatsApp reminders and answers basic inquiries 24/7 without the doctor being available.',
              features: [
                'Chatbots and automatic replies 24/7 so no message goes unanswered, even when you\'re not online, and every inquiry turns into an appointment or lead.',
                'Appointment reminders via WhatsApp or email to reduce no-shows and better organize your day, without having to call each patient manually.',
                'Invoicing and email automation so you can bill and send documents without wasting time on repetitive tasks that AI can do for you.',
                'AI agents to qualify leads and follow up on sales automatically, identifying who\'s closer to hiring and prioritizing your time.',
              ],
              cta: 'Automate my business',
              cta_subline:
                'We review which processes you can automate (appointments, reminders, replies, invoicing) and propose a plan. No commitment.',
            },
          },
          {
            slug: 'saas-product',
            title: 'SaaS & Custom Applications',
            desc: 'We turn your idea into a digital product ready for users and investment: management platforms, tools with subscriptions or payment flows. MVP with solid architecture, admin panel, and clear metrics. Validate without rebuilding everything.',
            use_case: 'Startup or business launching its first digital product (management, payments, subscriptions) and needing something ready to grow and present to investors.',
            icon: 'layers',
            details: {
              intro:
                'We take your idea from paper to a solid MVP you can launch to first users and show to investors. Management platforms, tools with subscriptions or payment flows. We build the right foundation from the start so you can validate and scale without having to rewrite everything later.',
              proof_line:
                'Example: booking platform with monthly subscription for professionals who need to charge and manage appointments online, ready to receive users and present clear metrics to investors.',
              features: [
                'Robust backend (Django, Node) and scalable databases so your product is stable, secure, and can grow without crashes or performance issues when you have more users.',
                'Admin panel so you control users, payments, and metrics without depending on a developer every time you need to make an adjustment or see how your business is doing.',
                'Payment integration (Stripe, PayPal) and subscriptions so you can charge securely and automatically, without worrying about your customers\' data security.',
                'Architecture ready to grow with more users, new features, and marketing campaigns without having to rewrite the codebase when you want to scale.',
              ],
              cta: 'Quote my application',
              cta_subline:
                'We give you a clear estimate of timeline, cost, and phases to launch your MVP. No commitment.',
            },
          },
          {
            slug: 'cloud-infrastructure',
            title: 'Infrastructure & Cloud',
            desc: 'Deployments on secure servers, SQL databases, and architectures that don\'t go down. Your software runs fast and stable; fewer outages, more trust from your customers and from you.',
            use_case: 'Business or SaaS product that already has an application and needs it to be stable, secure, and scalable without worrying about servers.',
            icon: 'cloud',
            details: {
              intro:
                'Your software lives in the cloud. We make sure it\'s secure, fast, and stable: fewer outages during critical hours, better performance even as traffic grows, and automatic backups so you never lose data. Without you having to worry about servers or traffic, you focus on your business and we focus on making everything work.',
              proof_line:
                'Example: booking platform that goes from crashing during peak hours to handling ad campaigns without interruptions, with automatic backups and monitoring that detects issues before they affect users.',
              features: [
                'Configuration on AWS or Google Cloud so your site or app stays stable under high traffic and you can scale when needed without interruptions.',
                'MySQL/PostgreSQL databases and automatic backups so your data is always backed up and you can recover it if something fails, without losing your customers\' information.',
                'Containers (Docker) and orchestration when needed so deployments are safer and repeatable, without surprises every time you update your application.',
                'Security and monitoring so we detect problems before the customer complains, and you can sleep peacefully knowing everything is working correctly.',
              ],
              cta: 'Improve my infrastructure',
              cta_subline:
                'We review your current infrastructure (cloud, database, security) and propose an improvement plan. No commitment.',
            },
          },
        ],
      },
      portfolio: {
        label: 'Portfolio',
        title: 'Featured Projects',
        preview_suffix: 'Preview',
        subtitle:
          'Real products we build: personal finance, adoption, SaaS, and high-performance corporate sites. Engineering applied to results.',
        items: [
          {
            id: 'paymind',
            title: 'PayMind',
            category: 'Personal finance / Fintech',
            desc: 'Web application for intelligent credit card management and debt control.',
            result: 'For users with multiple cards who want better control over debt and on-time payments.',
            tags: ['Django', 'Python', 'Fintech'],
            image: 'assets/images/paymind-placeholder.jpg',
          },
          {
            id: 'pawmatch',
            title: 'PawMatch',
            category: 'Adoption / NGO',
            desc: '"Tinder-style" platform for pet adoption and matching.',
            result: 'For shelters and adopters: faster adoptions and better matching between pets and families.',
            tags: ['Next.js', 'Supabase', 'React'],
            image: 'assets/images/pawmatch-placeholder.jpg',
          },
          {
            id: 'cardflow',
            title: 'CardFlow',
            category: 'Personal finance',
            desc: 'Financial suite for cash flow tracking and personal expense analysis.',
            result: 'For individuals and teams who need clarity on spending and cash flow without spreadsheets.',
            tags: ['Angular', 'TypeScript', 'Tailwind'],
            image: 'assets/images/cardflow-placeholder.jpg',
          },
          {
            id: 'jh-agency',
            title: 'JH Dev Agency',
            category: 'B2B corporate site',
            desc: 'High-performance corporate site with modern architecture (SSR, Zoneless).',
            result: 'For the agency: stronger image, speed, and credibility with B2B clients.',
            tags: ['Angular 19', 'SSR', 'Tailwind v4'],
            image: 'assets/images/agency-placeholder.jpg',
          },
        ],
      },
      contact: {
        title: 'Schedule a call',
        subtitle:
          "Tell us briefly about your project. We'll reply within 24 hours and, if it's a fit, we'll set up a 30-minute call to define scope, timeline, and next steps.",
        subtitle_extra:
          'No commitment: it\'s an exploratory call to get to know each other and see if we can help.',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          type: 'Project Type',
          type_help: 'E.g. site for your practice, booking automation, SaaS platform, etc.',
          budget: 'Estimated Budget',
          budget_help: 'If you\'re not sure about budget yet, choose "To be defined" and we\'ll discuss it on the call.',
          message: 'Project Details',
          message_placeholder: 'Tell us what your business does, what problem you want to solve, and when you\'d like to launch.',
          btn: 'Request 30-min call',
          after_submit: 'We\'ll reply within 24 hours with next steps for your project.',
        },
        info: {
          email_label: 'Email us directly',
          location_label: 'Location',
          location: 'Puebla, Mexico (Global Remote)',
          availability_label: 'Availability',
          availability: 'Accepting new projects',
          scope_global: 'We work with clients in Mexico and other Spanish-speaking countries.',
        },
      },
      blog: {
        title: 'Engineering & Thoughts',
        subtitle:
          'Ideas, real cases, and strategies on how we use software, architecture, and AI to make businesses more efficient. For business owners, founders, and technical teams.',
        author_line:
          'Written by José Horacio, software engineer specialized in high-performance applications and AI automation.',
        posts: [
          {
            id: 1,
            title: 'Why we migrated from React to Angular 19 for Enterprise Apps',
            excerpt:
              "A deep dive into performance, Signals, and why Angular's strict structure saves money in the long run.",
            benefit:
              'Ideal for teams that need stable applications in the long run and want to reduce maintenance costs.',
            date: 'Feb 12, 2026',
            readTime: '6 min read',
            category: 'Architecture',
          },
          {
            id: 2,
            title: 'Integrating AI Agents into traditional workflows',
            excerpt:
              "How we use Python and OpenAI to automate 40% of our clients' administrative tasks.",
            benefit:
              'For practices and businesses that want to cut administrative tasks without hiring more staff.',
            date: 'Jan 28, 2026',
            readTime: '4 min read',
            category: 'Artificial Intelligence',
          },
          {
            id: 3,
            title: 'Optimizing Core Web Vitals for E-commerce',
            excerpt:
              'Advanced Lazy Loading and Server-Side Rendering (SSR) strategies to boost SEO.',
            benefit:
              'Useful for e-commerce that want more sales from Google and fewer users leaving due to slow speed.',
            date: 'Jan 15, 2026',
            readTime: '8 min read',
            category: 'Performance',
          },
        ],
      },
      footer: {
        tagline: 'High-performance software for businesses that want to grow.',
        rights: 'All rights reserved.',
        sections: { company: 'Company', legal: 'Legal' },
        links: {
          about: 'About Us',
          careers: 'Careers',
          privacy: 'Privacy Policy',
          terms: 'Terms of Use',
        },
      },
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
