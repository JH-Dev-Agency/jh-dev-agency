import { Component, signal, inject, effect, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav
      class="fixed top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-md transition-all duration-300"
      [class.bg-white/80]="!scrolled()"
      [class.dark:bg-zinc-950/80]="!scrolled()"
      [class.shadow-lg]="scrolled()"
      [class.bg-white]="scrolled()"
      [class.dark:bg-zinc-950]="scrolled()"
    >
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300"
        [class.h-16]="!scrolled()"
        [class.h-14]="scrolled()"
      >
        <!-- LOGO -->
        <a routerLink="/" class="flex items-center gap-2 group">
          <div
            class="relative flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black transition-transform group-hover:scale-105 shadow-lg shadow-zinc-500/20"
          >
            <span class="font-mono text-lg font-bold tracking-tighter">JH</span>
          </div>

          <span class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-sans">
            {{ settings.text().brandShort }}
          </span>
        </a>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex md:items-center md:gap-8">
          <a
            routerLink="/"
            routerLinkActive="text-sky-500 font-semibold"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            {{ settings.text().nav.home }}
          </a>

          <a
            routerLink="/services"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            {{ settings.text().nav.services }}
          </a>

          <a
            routerLink="/portfolio"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            {{ settings.text().nav.portfolio }}
          </a>

          <a
            routerLink="/blog"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            {{ settings.text().nav.blog }}
          </a>

          <!-- NUEVA HERRAMIENTA -->
          <a
            routerLink="/website-audit"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            Audit
          </a>

          <a
            routerLink="/contact"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            {{ settings.text().nav.contact }}
          </a>

          <!-- CTA -->
          <a
            routerLink="/contact"
            class="ml-2 rounded-md bg-zinc-900 dark:bg-white
              px-3 py-1.5 lg:px-4 lg:py-2
              text-xs lg:text-sm font-semibold
              text-white dark:text-zinc-900
              hover:opacity-90 transition-all whitespace-nowrap"
          >
            Agendar llamada
          </a>
        </div>

        <!-- ACTIONS -->
        <div class="flex items-center gap-3">
          <!-- LANGUAGE -->
          <button
            (click)="settings.toggleLang()"
            class="flex items-center justify-center h-9 px-3 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-xs font-bold uppercase w-10"
          >
            {{ settings.language().toUpperCase() }}
          </button>

          <!-- THEME -->
          <button
            (click)="settings.toggleTheme()"
            class="flex items-center justify-center h-9 w-9 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            @if (settings.theme() === 'dark') {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="4" />
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
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            }
          </button>

          <!-- MOBILE MENU -->
          <button
            (click)="isOpen.set(!isOpen())"
            aria-label="Abrir menú"
            class="md:hidden flex items-center justify-center h-9 w-9 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            ☰
          </button>
        </div>
      </div>

      <!-- MOBILE MENU -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300"
        [class.max-h-0]="!isOpen()"
        [class.opacity-0]="!isOpen()"
        [class.max-h-80]="isOpen()"
        [class.opacity-100]="isOpen()"
      >
        <div
          class="bg-white dark:bg-zinc-950 p-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col space-y-1"
        >
          <a routerLink="/" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg">
            {{ settings.text().nav.home }}
          </a>

          <a
            routerLink="/services"
            (click)="isOpen.set(false)"
            class="block px-3 py-2.5 rounded-lg"
          >
            {{ settings.text().nav.services }}
          </a>

          <a
            routerLink="/portfolio"
            (click)="isOpen.set(false)"
            class="block px-3 py-2.5 rounded-lg"
          >
            {{ settings.text().nav.portfolio }}
          </a>

          <a routerLink="/blog" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg">
            {{ settings.text().nav.blog }}
          </a>

          <!-- NUEVA TOOL -->
          <a
            routerLink="/website-audit"
            (click)="isOpen.set(false)"
            class="block px-3 py-2.5 rounded-lg"
          >
            Website Audit
          </a>

          <a routerLink="/contact" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg">
            {{ settings.text().nav.contact }}
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class Navbar {
  readonly settings = inject(Settings);
  readonly isOpen = signal(false);
  readonly scrolled = signal(false);

  private platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.addEventListener('scroll', () => {
          this.scrolled.set(window.scrollY > 20);
        });
      }
    });
  }
}
