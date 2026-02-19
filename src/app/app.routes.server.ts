import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Server, // Renderizado bajo demanda (sin errores de parámetros)
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender, // Estático para lo demás
  },
];
