import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Server, // <--- Esto evita que pida 'getPrerenderParams'
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
