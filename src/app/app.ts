import { Component, inject, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Settings } from './core/state/settings';
import { inject as injectAnalytics } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <app-navbar />

    <main
      class="pt-16 min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
    >
      <router-outlet />
    </main>

    <app-footer />
  `,
})
export class App {
  settings = inject(Settings);

  constructor() {
    /**
     * Initialize Vercel Web Analytics
     * afterNextRender ensures analytics only run on the client (not during SSR)
     * and wait until the first render is complete
     */
    afterNextRender(() => {
      injectAnalytics();
    });
  }
}
