import { RenderMode, ServerRoute } from '@angular/ssr';

// v2 - all routes SSR
export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
