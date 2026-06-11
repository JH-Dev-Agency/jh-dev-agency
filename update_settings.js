const fs = require('fs');

let settings = fs.readFileSync('src/app/core/state/settings.ts', 'utf8');

settings = settings.replace(
  /proof_social: \{([\s\S]*?)\},\s*faq_loading/g,
  `proof_social: {$1},
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
      faq_loading`
);

settings = settings.replace(
  /proof_social: \{([\s\S]*?)\},\s*faq_loading: 'Loading/g,
  `proof_social: {$1},
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
      faq_loading: 'Loading`
);

settings = settings.replace(
          /btn: 'Solicitar llamada de 30 min',\s*after_submit:([\s\S]*?)\}/,
          `btn: 'Solicitar llamada de 30 min',
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
          after_submit:$1}`
);

settings = settings.replace(
          /btn: 'Request 30-min call',\s*after_submit:([\s\S]*?)\}/,
          `btn: 'Request 30-min call',
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
          after_submit:$1}`
);

settings = settings.replace(
    /rights: 'Todos los derechos reservados.',\s*sections:/,
    `rights: 'Todos los derechos reservados.',
        madeWith: 'Hecho con Angular 19 · Desplegado en Vercel',
        sections:`
);

settings = settings.replace(
    /rights: 'All rights reserved.',\s*sections:/,
    `rights: 'All rights reserved.',
        madeWith: 'Built with Angular 19 · Deployed on Vercel',
        sections:`
);

fs.writeFileSync('src/app/core/state/settings.ts', settings);
