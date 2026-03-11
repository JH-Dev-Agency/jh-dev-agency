// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Server, // ← SSR en tiempo real
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Server, // ← SSR en tiempo real
  },
  {
    path: '**',
    renderMode: RenderMode.Server, // ← todo SSR
  },
];
