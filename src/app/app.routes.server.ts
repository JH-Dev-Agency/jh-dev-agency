// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'web-development' },
        { slug: 'ai-automation' },
        { slug: 'saas-product' },
        { slug: 'cloud-infrastructure' },
      ];
    },
  },

  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [{ id: '1' }, { id: '2' }, { id: '3' }];
    },
  },

  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
