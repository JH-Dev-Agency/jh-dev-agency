import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { inject as injectAnalytics } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300"
    >
      <app-navbar />

      <main class="pt-16 flex-1">
        <router-outlet />
      </main>

      <app-footer />
    </div>
  `,
})
export class App {
  constructor() {
    // Ejecutar analytics solo en el cliente (SSR safe)
    afterNextRender(() => {
      injectAnalytics();
    });
  }
}
