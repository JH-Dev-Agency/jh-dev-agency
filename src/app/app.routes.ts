import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Services } from './features/services/services';
import { Portfolio } from './features/portfolio/portfolio';
import { Contact } from './features/contact/contact';
import { Blog } from './features/blog/blog';
import { NotFound } from './features/not-found/not-found';
import { ServiceDetail } from './features/services/service-detail';

export const routes: Routes = [
  { path: '', component: Home }, // Ruta Raíz
  { path: 'services', component: Services },
  { path: 'services/:slug', component: ServiceDetail },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: 'blog', component: Blog },
  { path: '**', component: NotFound },
];
