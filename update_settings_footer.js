const fs = require('fs');

let settings = fs.readFileSync('src/app/core/state/settings.ts', 'utf8');

settings = settings.replace(
    /madeWith: 'Hecho con Angular 19 · Desplegado en Vercel',/,
    `madeWith: 'Hecho con Angular 19 · Desplegado en Vercel',
        ready_title: '¿Listo para empezar?',
        ready_btn: 'Agendar llamada →',
        audit_link: 'Auditoría Web',`
);

settings = settings.replace(
    /madeWith: 'Built with Angular 19 · Deployed on Vercel',/,
    `madeWith: 'Built with Angular 19 · Deployed on Vercel',
        ready_title: 'Ready to start?',
        ready_btn: 'Schedule a call →',
        audit_link: 'Website Audit',`
);

fs.writeFileSync('src/app/core/state/settings.ts', settings);
