import { Component, inject, afterNextRender } from '@angular/core'; // Añadimos afterNextRender
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Settings } from './core/state/settings';
import { inject as injectAnalytics } from '@vercel/analytics'; // Importamos con alias

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
     * afterNextRender asegura que las analíticas no se ejecuten en el servidor (SSR)
     * y que esperen a que el primer renderizado (incluyendo el tema oscuro) esté listo.
     */
    afterNextRender(() => {
      injectAnalytics();
    });
  }
}
