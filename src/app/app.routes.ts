import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Services } from './features/services/services';
import { ServiceDetail } from './features/services/service-detail';

import { Blog } from './features/blog/blog';
import { Post } from './features/blog/post';

import { Portfolio } from './features/portfolio/portfolio';
import { Contact } from './features/contact/contact';

import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'services', component: Services },
  { path: 'services/:slug', component: ServiceDetail },

  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  {
    path: 'website-audit',
    loadComponent: () =>
      import('./features/website-audit/website-audit').then((m) => m.WebsiteAudit),
  },

  { path: 'blog', component: Blog },
  { path: 'blog/:id', component: Post },

  { path: '**', component: NotFound },
];
