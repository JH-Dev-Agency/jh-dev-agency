import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { WhatsappButton } from './shared/components/whatsapp-button';
import { inject as injectAnalytics } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, WhatsappButton],
  template: `
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative"
    >
      <app-navbar />

      <main class="pt-16 flex-1">
        <router-outlet />
      </main>

      <app-footer />
      <app-whatsapp-button />
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
