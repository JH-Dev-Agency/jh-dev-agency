import { Injectable, signal, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class Settings {
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
          badge: 'Ingeniería de software · Alto rendimiento',
          title_prefix: 'Software que impulsa tu negocio',
          title_gradient: 'Menos trabajo manual. Más ventas. Más control.',
          subtitle:
            'En JH Dev Agency desarrollamos software para negocios que quieren crecer: webs rápidas que convierten, automatización con IA y productos SaaS listos para escalar.',
          cta_primary: 'Agendar una llamada',
          cta_secondary: 'Ver proyectos',
        },
        stack_label: 'Tecnología moderna para software rápido y escalable',
        expertise: {
          label: 'Servicios',
          title: 'Soluciones que se traducen en resultados',
          services_link: 'Ver todos los servicios',
          cards: [
            {
              title: 'Desarrollo Web',
              desc: 'Webs rápidas y profesionales que convierten visitantes en clientes. Mejor posicionamiento en Google, menos rebote y más consultas desde internet.',
              bullets: [
                'Sitios optimizados para velocidad, SEO y conversión.',
                'Ejemplo: clínica o negocio local que empieza a recibir citas y consultas desde su web.',
              ],
            },
            {
              title: 'Automatización e IA',
              desc: 'Automatizamos tareas repetitivas para que tu negocio funcione incluso cuando no estás frente a la pantalla.',
              bullets: [
                'Automatización de citas, recordatorios y respuestas a clientes.',
                'Ejemplo: consultorio o negocio que atiende consultas y reservas 24/7.',
              ],
            },
            {
              title: 'Productos SaaS',
              desc: 'Transformamos tu idea en un producto digital listo para usuarios e inversión.',
              bullets: [
                'MVP sólido con panel de administración y sistema de pagos.',
                'Ejemplo: startup que necesita lanzar rápido para validar su producto.',
              ],
            },
          ],
        },
        proof_social: {
          title: 'Ingeniería enfocada en resultados',
          supporting_text:
            'Trabajamos con negocios que quieren crecer usando software: consultorios, negocios locales y startups que necesitan soluciones sólidas y escalables.',
          cases: [
            'Clínica privada — Web profesional + automatización de citas → +40% reservas en 3 meses.',
            'Negocio local — Tienda online rápida + pagos integrados → menos errores y más ventas.',
            'Startup SaaS — MVP con panel de administración y suscripciones → listo para primeros usuarios en 12 semanas.',
          ],
          why_us:
            'Código mantenible, arquitectura sólida y entregas claras. Sin humo ni promesas vacías.',
        },
        cta_banner: {
          title: 'Hablemos de tu proyecto',
          desc: 'Agenda una llamada de 30 minutos y revisamos cómo el software puede ayudarte a ahorrar tiempo, mejorar procesos o aumentar ventas.',
          btn: 'Agendar una llamada',
          terminal: [
            '> Conexión con JH Dev Agency establecida',
            '> Análisis de requerimientos listo',
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
            use_case:
              'Clínica o negocio local que quiere captar citas y leads desde la web sin depender solo de redes o llamadas.',
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
            use_case:
              'Consultorio o negocio que necesita automatizar citas, recordatorios y primeras respuestas a pacientes o clientes.',
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
            use_case:
              'Startup o negocio que lanza su primer producto digital (gestión, pagos, suscripciones) y necesita algo listo para crecer y presentar a inversores.',
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
            use_case:
              'Negocio o producto SaaS que ya tiene una aplicación y necesita que sea estable, segura y escalable sin preocuparse por servidores.',
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
        title: 'Clientes y proyectos',
        preview_suffix: 'Vista previa',
        subtitle:
          'Proyectos reales desarrollados para negocios que buscan mejorar su presencia digital y atraer más clientes mediante software moderno y rápido.',

        items: [
          {
            id: 'otorrino-tlaxcala',
            title: 'Clínica de Otorrinolaringología · Tlaxcala',
            category: 'Cliente real · Sitio web profesional',
            desc: 'Desarrollo de sitio web moderno para consultorio de otorrinolaringología enfocado en generar confianza en pacientes y facilitar el contacto directo desde internet.',
            result:
              'Presencia profesional en línea y canal directo para consultas y citas médicas.',
            tags: ['Angular', 'SEO Local', 'Web Performance'],
            image: 'assets/portfolio/otorrinotlaxcala.webp',
            link: 'https://otorrinotlaxcala.com/',
          },
          {
            id: 'cabana-maria-maria',
            title: 'Cabaña María María · Salón y Jardín de Eventos',
            category: 'Cliente real · Landing Page de Alto Rendimiento',
            desc: 'Diseño y desarrollo de una landing page premium para un salón de eventos líder en Tlaxcala. El proyecto se centró en la optimización de la conversión (CRO) y una arquitectura técnica de alta velocidad para dispositivos móviles.',
            result:
              'Canal de ventas optimizado con redirección directa a WhatsApp y posicionamiento en el Local Pack de Google mediante SEO avanzado.',
            tags: ['Next.js', 'Tailwind CSS', 'SEO Avanzado'],
            image: 'assets/portfolio/cabanamariamaria.webp',
            link: 'https://cabanamariamaria.com',
          },
        ],
      },
      faq: {
        title: 'Preguntas frecuentes',
        subtitle: 'Resolvemos algunas de las dudas más comunes antes de comenzar un proyecto.',
        items: [
          {
            q: 'Si ya tengo Facebook o Instagram, ¿necesito una web?',
            a: 'Las redes sociales ayudan a promocionar tu negocio, pero una página web te permite aparecer en Google, transmitir mayor confianza y recibir consultas o reservas directamente desde internet.',
          },
          {
            q: '¿Cuánto tarda en desarrollarse una página web?',
            a: 'Dependiendo del proyecto, una web profesional puede tardar entre 1 y 3 semanas. Aplicaciones o productos más complejos pueden tardar entre 8 y 12 semanas.',
          },
          {
            q: '¿Mi página aparecerá en Google?',
            a: 'Sí. Todos los sitios que desarrollamos incluyen optimización SEO técnica y buenas prácticas de rendimiento para mejorar su visibilidad en buscadores.',
          },
          {
            q: '¿Mi página web funcionará en celulares?',
            a: 'Sí. Todas nuestras webs se desarrollan con diseño responsive, lo que significa que funcionan correctamente en celulares, tablets y computadoras.',
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
          type_help:
            'Ej: sitio para tu consultorio, automatización de reservas, plataforma SaaS, etc.',
          budget: 'Presupuesto Estimado',
          budget_help:
            'Si aún no tienes claro el presupuesto, elige "Por definir" y lo vemos en la llamada.',
          message: 'Detalles del Proyecto',
          message_placeholder:
            'Cuéntanos qué hace tu negocio, qué problema quieres resolver y en qué plazo te gustaría lanzar.',
          btn: 'Solicitar llamada de 30 min',
          btn_another: 'Enviar otro mensaje',
          send_whatsapp: 'Enviarme a WhatsApp',
          process: 'Procesando...',
          redirecting: 'Te redirigiremos a WhatsApp para enviar el mensaje.',
          success_title: '¡Mensaje preparado!',
          success_desc: 'Redirigiendo a WhatsApp de manera segura...',
          error_msg: 'Hubo un error al procesar el mensaje. Intenta de nuevo o escríbenos directamente.',
          req_name: 'Este campo es obligatorio',
          req_email: 'Ingresa un correo válido',
          req_message: 'Describe brevemente tu proyecto',
          after_submit:
            'Te responderemos en menos de 24 horas con los siguientes pasos para tu proyecto.',
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
      whatsappTooltip: 'Escríbenos por WhatsApp',
      blog: {
        title: 'Ingeniería & Pensamiento',
        subtitle:
          'Ideas, análisis técnicos y strategies sobre cómo usamos software, arquitectura moderna e inteligencia artificial para construir productos digitales rápidos, escalables y rentables.',
        author_line:
          'Escrito por José Horacio, ingeniero de software enfocado en aplicaciones de alto rendimiento, arquitectura moderna y automatización con IA.',

        posts: [
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
              {
                type: 'h2',
                text: 'Arquitectura consistente para equipos grandes',
              },
              {
                type: 'p',
                text: 'Una de las principales ventajas de Angular es su estructura. Mientras que React deja muchas decisiones abiertas, Angular define una arquitectura clara desde el inicio. Esto facilita que equipos grandes puedan colaborar sin generar caos en el código.',
              },
              {
                type: 'h2',
                text: 'Angular Signals y rendimiento',
              },
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
              {
                type: 'h2',
                text: 'Automatización de tareas repetitivas',
              },
              {
                type: 'p',
                text: 'Muchos negocios pierden horas en tareas administrativas: responder mensajes, confirmar citas, enviar recordatorios o clasificar clientes potenciales. Estas tareas pueden automatizarse con agentes de IA.',
              },
              {
                type: 'h2',
                text: 'IA como asistente operativo',
              },
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
              {
                type: 'h2',
                text: 'LCP — Largest Contentful Paint',
              },
              {
                type: 'p',
                text: 'Esta métrica mide cuánto tarda en mostrarse el contenido principal de una página. Optimizar imágenes, reducir scripts innecesarios y usar renderizado eficiente puede mejorar significativamente este valor.',
              },
              {
                type: 'h2',
                text: 'CLS — Cumulative Layout Shift',
              },
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
        ],
      },
      audit: {
        title: 'Analiza el rendimiento de tu sitio web',
        subtitle:
          'Obtén un reporte gratuito basado en Google Lighthouse. Descubre qué tan rápido carga tu sitio y cómo puede posicionar mejor en Google.',
        input_placeholder: 'https://tusitio.com',
        analyze_btn: 'Analizar',
        loading: 'Analizando sitio web...',
        performance: 'Rendimiento',
        seo: 'SEO',
        accessibility: 'Accesibilidad',
        best_practices: 'Buenas Prácticas',

        cta_title: 'Tu sitio web podría rendir mejor',
        cta_desc:
          'Ayudamos a negocios a alcanzar puntuaciones de rendimiento superiores a 90 y mejorar su posicionamiento en Google mediante ingeniería web de alto rendimiento.',
        cta_btn: 'Obtener auditoría profesional',

        avg_score: 'Puntuación promedio',
        seo_section_title: '¿Qué es una prueba de velocidad web?',

        seo_section_desc:
          'Una prueba de velocidad analiza qué tan rápido carga tu sitio y evalúa métricas como rendimiento, SEO, accesibilidad y buenas prácticas técnicas.',

        performance_section_title: 'Por qué el rendimiento web importa',

        benefits: [
          'Mejorar posicionamiento en Google',
          'Reducir tasa de rebote',
          'Aumentar conversiones',
          'Mejorar experiencia de usuario',
        ],

        avg_score_text: 'La puntuación promedio de tu sitio es',

        avg_score_desc:
          'Puntuaciones menores a 90 indican oportunidades para mejorar velocidad, SEO y experiencia de usuario.',

        loading_steps: [
          'Analizando métricas de rendimiento',
          'Ejecutando análisis SEO',
          'Evaluando accesibilidad',
          'Verificando buenas prácticas',
        ],
      },
      footer: {
        tagline:
          'Desarrollamos software, automatización e inteligencia artificial para negocios que quieren crecer.',
        rights: 'Todos los derechos reservados.',
        madeWith: 'Hecho con Angular 19 · Desplegado en Vercel',
        ready_title: '¿Listo para empezar?',
        ready_btn: 'Agendar llamada →',
        audit_link: 'Auditoría Web',
        sections: { company: 'Compañía', legal: 'Legal' },
        links: {
          about: 'Sobre Nosotros',
          careers: 'Carreras',
          privacy: 'Privacidad',
          terms: 'Términos de Uso',
        },
      },
      notFound: {
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
          badge: 'Software engineering · High performance',
          title_prefix: 'Software that drives your business',
          title_gradient: 'Less manual work. More sales. More control.',
          subtitle:
            'At JH Dev Agency we build software for businesses that want to grow: fast websites that convert, AI automation and SaaS products ready to scale.',
          cta_primary: 'Schedule a call',
          cta_secondary: 'View projects',
        },
        stack_label: 'Modern technology for fast, scalable software',
        expertise: {
          label: 'Services',
          title: 'Solutions that translate into results',
          services_link: 'View all services',
          cards: [
            {
              title: 'Web Development',
              desc: 'Fast, professional websites that convert visitors into clients. Better Google ranking, less bounce, and more inquiries from the web.',
              bullets: [
                'Sites optimized for speed, SEO and conversion.',
                'Example: clinic or local business that starts receiving appointments and inquiries from their website.',
              ],
            },
            {
              title: 'Automation & AI',
              desc: 'We automate repetitive tasks so your business runs even when you are not behind the screen.',
              bullets: [
                'Automation of appointments, reminders and customer replies.',
                'Example: practice or business that handles inquiries and bookings 24/7.',
              ],
            },
            {
              title: 'SaaS Products',
              desc: 'We turn your idea into a digital product ready for users and investment.',
              bullets: [
                'Solid MVP with admin panel and payment system.',
                'Example: startup that needs to launch fast to validate their product.',
              ],
            },
          ],
        },
        proof_social: {
          title: 'Engineering focused on results',
          supporting_text:
            'We work with businesses that want to grow using software: practices, local businesses and startups that need solid, scalable solutions.',
          cases: [
            'Private clinic — Professional web + appointment automation → +40% bookings in 3 months.',
            'Local business — Fast online store + integrated payments → fewer errors and more sales.',
            'SaaS startup — MVP with admin panel and subscriptions → ready for first users in 12 weeks.',
          ],
          why_us:
            'Maintainable code, solid architecture and clear deliveries. No smoke, no empty promises.',
        },
        cta_banner: {
          title: "Let's talk about your project",
          desc: 'Schedule a 30-minute call and we will review how software can help you save time, improve processes or increase sales.',
          btn: 'Schedule a call',
          terminal: [
            '> Connection to JH Dev Agency established',
            '> Requirements analysis ready',
            '> Next step: schedule 30-min meeting',
          ],
        },
      },
      services: {
        title: 'Solutions that impact sales, time and control',
        subtitle:
          'Fast websites, automated processes and digital products that reduce manual hours, generate more leads and give you control. Technology built so your business can scale without failures.',
        more_info: 'More information',
        items: [
          {
            slug: 'web-development',
            title: 'High-Performance Web Development',
            desc: 'Ultra-fast sites and apps with modern stack (Angular, Next.js) and strong Google scores. Less bounce, better ranking and more inquiries or sales from the web. Your practice or business looks professional and responds in an instant.',
            use_case:
              'Clinic or local business that wants to capture appointments and leads from the web without relying only on social media or phone calls.',
            icon: 'code',
            details: {
              intro:
                "We don't just make sites that look good. We build websites that load instantly, improve your Google ranking and turn visitors into appointments or sales. Less bounce, more leads and a serious image for your business.",
              proof_line:
                'Example: private clinic or local business that moves from relying on calls and social media to receiving bookings and inquiries from the web, with less time wasted and more control.',
              features: [
                'Fast, scalable architecture (SPA/SSR): your site responds in an instant and handles more traffic without slowing down.',
                'Technical SEO so you get found on Google when people search for your services or area, not just your name.',
                "Mobile-first design so it works on any device and you don't lose leads who visit from their phone.",
                'Integration with booking systems or contact forms so every visit can turn into an appointment or captured lead.',
              ],
              cta: 'Audit my current site',
              cta_subline:
                'Includes: load speed, technical SEO, mobile experience and message clarity. No commitment.',
            },
          },
          {
            slug: 'ai-automation',
            title: 'Automation & AI',
            desc: 'WhatsApp bots, AI agents and automated flows for bookings, reminders and customer replies. Your business runs 24/7 with fewer manual hours and fewer data-entry errors. Fewer no-shows and fewer repetitive calls.',
            use_case:
              'Practice or business that needs to automate appointments, reminders and first responses to patients or customers.',
            icon: 'cpu',
            details: {
              intro:
                'We automate the repetitive so you can focus on what really matters. Bookings, reminders and answers to inquiries run on their own, without you being behind the screen. Fewer no-shows, fewer administrative errors and more control over your schedule and sales.',
              proof_line:
                'Example: private practice that reduces missed appointments by 60% thanks to automatic WhatsApp reminders and answers basic inquiries 24/7 without the doctor being available.',
              features: [
                "Chatbots and automatic replies 24/7 so no message goes unanswered, even when you're not online, and every inquiry turns into an appointment or lead.",
                'Appointment reminders via WhatsApp or email to reduce no-shows and better organize your day, without having to call each patient manually.',
                'Invoicing and email automation so you can bill and send documents without wasting time on repetitive tasks that AI can handle for you.',
                "AI agents to qualify leads and follow up on sales automatically, identifying who's closest to hiring and prioritizing your time.",
              ],
              cta: 'Automate my business',
              cta_subline:
                'We review which processes you can automate (appointments, reminders, replies, invoicing) and propose a plan. No commitment.',
            },
          },
          {
            slug: 'saas-product',
            title: 'SaaS & Custom Applications',
            desc: 'We turn your idea into a digital product ready for users and investment: management platforms, tools with subscriptions or payment flows. MVP with solid architecture, admin panel and clear metrics. Validate without rebuilding everything.',
            use_case:
              'Startup or business launching its first digital product (management, payments, subscriptions) and needing something ready to grow and present to investors.',
            icon: 'layers',
            details: {
              intro:
                'We take your idea from paper to a solid MVP you can launch to first users and show to investors. Management platforms, tools with subscriptions or payment flows. We build the right foundation from the start so you can validate and scale without having to rewrite everything later.',
              proof_line:
                'Example: booking platform with monthly subscription for professionals who need to charge and manage appointments online, ready to receive users and present clear metrics to investors.',
              features: [
                'Robust backend (Django, Node) and scalable databases so your product is stable, secure and can grow without crashes or performance issues when you have more users.',
                'Admin panel so you control users, payments and metrics without depending on a developer every time you need to make an adjustment or check how your business is doing.',
                "Payment integration (Stripe, PayPal) and subscriptions so you can charge securely and automatically, without worrying about your customers' data security.",
                'Architecture ready to grow with more users, new features and marketing campaigns without having to rewrite the codebase when you want to scale.',
              ],
              cta: 'Quote my application',
              cta_subline:
                'We give you a clear estimate of timeline, cost and phases to launch your MVP. No commitment.',
            },
          },
          {
            slug: 'cloud-infrastructure',
            title: 'Infrastructure & Cloud',
            desc: "Deployments on secure servers, SQL databases and architectures that don't go down. Your software runs fast and stable; fewer outages, more trust from your customers and from you.",
            use_case:
              'Business or SaaS product that already has an application and needs it to be stable, secure and scalable without worrying about servers.',
            icon: 'cloud',
            details: {
              intro:
                "Your software lives in the cloud. We make sure it's secure, fast and stable: fewer outages during critical hours, better performance even as traffic grows, and automatic backups so you never lose data. Without you having to worry about servers or traffic, you focus on your business and we focus on making everything work.",
              proof_line:
                'Example: booking platform that goes from crashing during peak hours to handling ad campaigns without interruptions, with automatic backups and monitoring that detects issues before they affect users.',
              features: [
                'Configuration on AWS or Google Cloud so your site or app stays stable under high traffic and you can scale when needed without interruptions.',
                "MySQL/PostgreSQL databases and automatic backups so your data is always backed up and you can recover it if something fails, without losing your customers' information.",
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
        title: 'Clients and projects',
        preview_suffix: 'Live Preview',
        subtitle:
          'Real projects developed for businesses looking to improve their digital presence and attract more clients through modern, fast software.',
        items: [
          {
            id: 'otorrino-tlaxcala',
            title: 'ENT Clinic · Tlaxcala',
            category: 'Real client · Professional website',
            desc: 'Development of a modern website for an ear, nose and throat practice focused on building patient trust and making direct contact easier from the web.',
            result:
              'Professional online presence and direct channel for medical inquiries and appointments.',
            tags: ['Angular', 'SEO Local', 'Web Performance'],
            image: 'assets/portfolio/otorrinotlaxcala.webp',
            link: 'https://otorrinotlaxcala.com/',
          },
          {
            id: 'cabana-maria-maria',
            title: 'Cabaña María María · Event Venue & Gardens',
            category: 'Real-world Project · High-Performance Landing Page',
            desc: 'Design and development of a premium landing page for a leading event venue in Tlaxcala, Mexico. The project focused on Conversion Rate Optimization (CRO) and high-speed mobile architecture to ensure a seamless booking experience.',
            result:
              'Optimized sales funnel with direct WhatsApp integration and enhanced visibility in Google’s Local Pack through advanced SEO strategies.',
            tags: ['Next.js', 'Tailwind CSS', 'Advanced SEO'],
            image: 'assets/portfolio/cabanamariamaria.webp',
            link: 'https://cabanamariamaria.com',
          },
        ],
      },
      faq: {
        title: 'Frequently asked questions',
        subtitle: 'We answer some of the most common questions before starting a project.',
        items: [
          {
            q: 'If I already have Facebook or Instagram, do I need a website?',
            a: 'Social networks help promote your business, but a website allows you to appear on Google, convey more trust and receive inquiries or bookings directly from the internet.',
          },
          {
            q: 'How long does it take to develop a website?',
            a: 'Depending on the project, a professional website can take between 1 and 3 weeks. More complex applications or products can take between 8 and 12 weeks.',
          },
          {
            q: 'Will my website appear on Google?',
            a: 'Yes. All the sites we develop include technical SEO optimization and performance best practices to improve their visibility in search engines.',
          },
          {
            q: 'Will my website work on mobile phones?',
            a: 'Yes. All our websites are developed with responsive design, which means they work perfectly on mobile phones, tablets and computers.',
          },
        ],
      },
      contact: {
        title: 'Schedule a call',
        subtitle:
          "Tell us briefly about your project. We'll reply within 24 hours and, if it's a fit, we'll set up a 30-minute call to define scope, timeline and next steps.",
        subtitle_extra:
          "No commitment: it's an exploratory call to get to know each other and see if we can help.",
        form: {
          name: 'Full Name',
          email: 'Email Address',
          type: 'Project Type',
          type_help: 'E.g. site for your practice, booking automation, SaaS platform, etc.',
          budget: 'Estimated Budget',
          budget_help:
            'If you\'re not sure about the budget yet, choose "To be defined" and we\'ll discuss it on the call.',
          message: 'Project Details',
          message_placeholder:
            "Tell us what your business does, what problem you want to solve and when you'd like to launch.",
          btn: 'Request 30-min call',
          btn_another: 'Send another message',
          send_whatsapp: 'Send me to WhatsApp',
          process: 'Processing...',
          redirecting: 'You will be redirected to WhatsApp to send the message.',
          success_title: 'Message prepared!',
          success_desc: 'Redirecting to WhatsApp securely...',
          error_msg: 'There was an error processing the message. Please try again or message us directly.',
          req_name: 'This field is required',
          req_email: 'Enter a valid email address',
          req_message: 'Briefly describe your project',
          after_submit: "We'll reply within 24 hours with next steps for your project.",
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
      whatsappTooltip: 'Message us on WhatsApp',
      blog: {
        title: 'Engineering & Thinking',
        subtitle:
          'Ideas, technical analysis and strategies on how we use software, modern architecture and artificial intelligence to build fast, scalable and profitable digital products.',
        author_line:
          'Written by José Horacio, software engineer focused on high-performance applications, modern architecture and AI automation.',
        posts: [
          {
            id: 1,
            title: 'Why we migrated from React to Angular 19 for Enterprise applications',
            excerpt:
              'An analysis of performance, architecture and why Angular 19 is becoming a very solid alternative for large projects.',
            benefit:
              'Ideal for teams working on complex applications who want to reduce technical debt and maintenance costs.',
            date: 'Feb 12, 2026',
            readTime: '6 min read',
            category: 'Architecture',
            content: [
              {
                type: 'p',
                text: 'For years React has been one of the most popular tools for building modern web interfaces. However, in enterprise projects we have seen that Angular offers important advantages when the size of the project and the team grows.',
              },
              {
                type: 'h2',
                text: 'Consistent architecture for large teams',
              },
              {
                type: 'p',
                text: "One of Angular's main advantages is its structure. While React leaves many decisions open, Angular defines a clear architecture from the start. This makes it easier for large teams to collaborate without creating chaos in the codebase.",
              },
              {
                type: 'h2',
                text: 'Angular Signals and performance',
              },
              {
                type: 'p',
                text: 'With the arrival of Signals, Angular introduces a modern reactive model that reduces unnecessary renders and simplifies state management. This enables faster and more predictable applications.',
              },
              {
                type: 'p',
                text: 'For enterprise applications where maintainability, scalability and stability are critical, Angular 19 is becoming an increasingly interesting alternative to React.',
              },
            ],
          },
          {
            id: 2,
            title: 'Integrating AI Agents into traditional workflows',
            excerpt:
              'How we are using artificial intelligence agents to automate repetitive tasks in real businesses.',
            benefit:
              'Especially useful for practices, local businesses and startups that want to reduce manual work.',
            date: 'Jan 28, 2026',
            readTime: '4 min read',
            category: 'Artificial Intelligence',
            content: [
              {
                type: 'p',
                text: 'Artificial intelligence is no longer just for large companies. Today any business can integrate AI-based automation to improve its efficiency.',
              },
              {
                type: 'h2',
                text: 'Automating repetitive tasks',
              },
              {
                type: 'p',
                text: 'Many businesses lose hours on administrative tasks: replying to messages, confirming appointments, sending reminders or classifying potential clients. These tasks can be automated with AI agents.',
              },
              {
                type: 'h2',
                text: 'AI as an operational assistant',
              },
              {
                type: 'p',
                text: 'AI agents can act as assistants that answer basic inquiries, manage bookings or collect information before a sales call.',
              },
              {
                type: 'p',
                text: 'In many projects we have managed to reduce up to 40% of the time spent on administrative tasks simply by automating these processes.',
              },
            ],
          },
          {
            id: 3,
            title: 'Optimizing Core Web Vitals to improve SEO',
            excerpt:
              'How to optimize speed, interactivity and visual stability to improve Google ranking.',
            benefit:
              'Essential for businesses that depend on organic traffic or want to improve conversions from their website.',
            date: 'Jan 15, 2026',
            readTime: '8 min read',
            category: 'Performance',
            content: [
              {
                type: 'p',
                text: 'Google uses metrics called Core Web Vitals to measure the user experience on a website. These metrics directly influence search engine ranking.',
              },
              {
                type: 'h2',
                text: 'LCP — Largest Contentful Paint',
              },
              {
                type: 'p',
                text: 'This metric measures how long it takes for the main content of a page to appear. Optimizing images, reducing unnecessary scripts and using efficient rendering can significantly improve this value.',
              },
              {
                type: 'h2',
                text: 'CLS — Cumulative Layout Shift',
              },
              {
                type: 'p',
                text: 'CLS measures how much content shifts while the page loads. Reserving space for images and avoiding late-loading elements helps improve this metric.',
              },
              {
                type: 'p',
                text: 'Optimizing Core Web Vitals not only improves SEO, it also improves user experience and increases the likelihood of conversion.',
              },
            ],
          },
        ],
      },
      audit: {
        title: 'Free Website Speed Test & SEO Audit Tool',
        subtitle:
          'Analyze your website performance, SEO, accessibility and best practices using Google Lighthouse.',
        input_placeholder: 'https://example.com',
        analyze_btn: 'Analyze',
        loading: 'Analyzing website...',
        performance: 'Performance',
        seo: 'SEO',
        accessibility: 'Accessibility',
        best_practices: 'Best Practices',

        cta_title: 'Your website could perform better',
        cta_desc:
          'We help businesses reach 90+ performance scores and improve Google rankings through high-performance web engineering.',
        cta_btn: 'Get a professional audit',

        avg_score: 'Average score',
        seo_section_title: 'What is a Website Speed Test?',

        seo_section_desc:
          'A website speed test analyzes how fast your website loads and evaluates metrics such as performance, SEO, accessibility and technical best practices.',

        performance_section_title: 'Why Website Performance Matters',

        benefits: [
          'Improve Google rankings',
          'Reduce bounce rate',
          'Increase conversions',
          'Improve user experience',
        ],

        avg_score_text: 'Your website average score is',

        avg_score_desc:
          'Scores below 90 usually indicate opportunities to improve loading speed, SEO visibility and user experience.',

        loading_steps: [
          'Checking performance metrics',
          'Running SEO analysis',
          'Evaluating accessibility',
          'Verifying best practices',
        ],
      },
      footer: {
        tagline:
          'We develop software, automation and artificial intelligence for businesses that want to grow.',
        rights: 'All rights reserved.',
        madeWith: 'Built with Angular 19 · Deployed on Vercel',
        ready_title: 'Ready to start?',
        ready_btn: 'Schedule a call →',
        audit_link: 'Website Audit',
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
        desc: 'The route you are trying to explore does not exist or has been moved. Return to safe base.',
        btn: 'Back to Dashboard',
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
