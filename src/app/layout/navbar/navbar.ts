import { Component, signal, inject, PLATFORM_ID, effect } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav
      class="fixed top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-all duration-300"
    >
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a routerLink="/" class="flex items-center gap-2 group">
          <div
            class="relative flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black transition-transform group-hover:scale-105 shadow-lg shadow-zinc-500/20"
          >
            <span class="font-mono text-lg font-bold tracking-tighter">JH</span>
          </div>
          <span class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-sans">
            Dev Studio
          </span>
        </a>

        <div class="hidden md:flex md:items-center md:gap-8">
          @for (item of menuItems(); track item.path) {
            <a
              [routerLink]="item.path"
              routerLinkActive="text-sky-500 font-semibold"
              [routerLinkActiveOptions]="{ exact: item.path === '/' }"
              class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              {{ item.label }}
            </a>
          }
        </div>

        <div class="flex items-center gap-3">
          <button
            (click)="toggleLang()"
            class="hidden md:flex items-center justify-center h-8 px-3 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors uppercase tracking-wide"
            aria-label="Change Language"
          >
            {{ currentLang() }}
          </button>

          <button
            (click)="toggleTheme()"
            class="flex items-center justify-center w-9 h-9 rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            aria-label="Toggle Theme"
          >
            @if (isDark()) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="animate-in spin-in-90 duration-300"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41-1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            } @else {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="animate-in fade-in duration-300"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            }
          </button>

          <button
            (click)="toggleMenu()"
            class="md:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      @if (isOpen()) {
        <div
          class="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 py-6 shadow-xl animate-in slide-in-from-top-2 fade-in duration-200"
        >
          <div class="flex flex-col space-y-4">
            @for (item of menuItems(); track item.path) {
              <a
                [routerLink]="item.path"
                (click)="closeMenu()"
                routerLinkActive="text-sky-500 bg-sky-50/50 dark:bg-sky-900/10"
                class="block px-4 py-2 rounded-lg text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                {{ item.label }}
              </a>
            }

            <div
              class="pt-6 mt-2 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center px-4"
            >
              <span class="text-sm font-medium text-zinc-500">Idioma / Language</span>
              <button
                (click)="toggleLang()"
                class="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-bold uppercase text-zinc-700 dark:text-zinc-300"
              >
                {{ currentLang() }}
              </button>
            </div>
          </div>
        </div>
      }
    </nav>
  `,
})
export class Navbar {
  private platformId = inject(PLATFORM_ID);

  // --- SIGNALS (ESTADO REACTIVO) ---
  readonly isOpen = signal(false);
  readonly isDark = signal(false);
  readonly currentLang = signal<'es' | 'en'>('es');

  // Configuración del Menú
  readonly menuItems = signal([
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/services' },
    { label: 'Portafolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contacto', path: '/contact' },
  ]);

  constructor() {
    // Effect: Reacciona automáticamente cuando cambia isDark()
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const html = document.documentElement;
        if (this.isDark()) {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
    });

    // Inicialización del tema al cargar (Solo navegador)
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      // Si hay guardado 'dark' o no hay nada pero el sistema es dark -> true
      if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        this.isDark.set(true);
      }
    }
  }

  // --- MÉTODOS PÚBLICOS ---

  toggleMenu() {
    this.isOpen.update((v) => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }

  toggleTheme() {
    this.isDark.update((v) => !v);
  }

  toggleLang() {
    this.currentLang.update((l) => {
      const newLang = l === 'es' ? 'en' : 'es';
      // Aquí actualizaremos los labels del menú dinámicamente más adelante
      this.updateMenuLabels(newLang);
      return newLang;
    });
  }

  // Pequeño helper para simular el cambio de idioma en el menú por ahora
  private updateMenuLabels(lang: 'es' | 'en') {
    if (lang === 'en') {
      this.menuItems.set([
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' },
      ]);
    } else {
      this.menuItems.set([
        { label: 'Inicio', path: '/' },
        { label: 'Servicios', path: '/services' },
        { label: 'Portafolio', path: '/portfolio' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contacto', path: '/contact' },
      ]);
    }
  }
}
