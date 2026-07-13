import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services').then((m) => m.Services),
  },
  {
    path: 'services/:slug',
    loadComponent: () => import('./features/services/service-detail').then((m) => m.ServiceDetail),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio').then((m) => m.Portfolio),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'website-audit',
    loadComponent: () =>
      import('./features/website-audit/website-audit').then((m) => m.WebsiteAudit),
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./features/blog/post').then((m) => m.Post),
  },
  {
    path: 'privacy',
    data: { doc: 'privacy' },
    loadComponent: () => import('./features/legal/legal-page').then((m) => m.LegalPage),
  },
  {
    path: 'terms',
    data: { doc: 'terms' },
    loadComponent: () => import('./features/legal/legal-page').then((m) => m.LegalPage),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
