import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'services',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'portfolio',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'blog',
    renderMode: RenderMode.Prerender,
  },

  // ❗ rutas dinámicas
  {
    path: 'services/:slug',
    renderMode: RenderMode.Server,
  },

  {
    path: 'blog/:id',
    renderMode: RenderMode.Server,
  },

  // fallback
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
