import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer'; // <--- IMPORTAR
import { Settings } from './core/state/settings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer], // <--- AGREGAR AQUÍ
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
}
