import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return []; // ← array vacío, no genera nada
    },
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return []; // ← array vacío, no genera nada
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
