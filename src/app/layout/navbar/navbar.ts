import { Component, signal, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
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
      [class.bg-white]="scrolled()"
      [class.dark:bg-zinc-950]="scrolled()"
      [class.bg-white\/80]="!scrolled()"
      [class.dark:bg-zinc-950\/80]="!scrolled()"
      [class.shadow-lg]="scrolled()"
      aria-label="Navegación principal"
    >
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300"
        [class.h-16]="!scrolled()"
        [class.h-14]="scrolled()"
      >
        <!-- LOGO -->
        <a routerLink="/" class="flex items-center gap-2 group" aria-label="JH Dev Agency — Inicio">
          <div
            class="relative flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black transition-transform group-hover:scale-105 shadow-lg shadow-zinc-500/20"
            aria-hidden="true"
          >
            <span class="font-mono text-lg font-bold tracking-tighter">JH</span>
          </div>
          <span class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-sans">
            {{ settings.text().brandShort }}
          </span>
        </a>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex md:items-center md:gap-8" role="menubar">
          <a
            routerLink="/"
            routerLinkActive="text-sky-500 font-semibold"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            role="menuitem"
          >
            {{ settings.text().nav.home }}
          </a>
          <a
            routerLink="/services"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            role="menuitem"
          >
            {{ settings.text().nav.services }}
          </a>
          <a
            routerLink="/portfolio"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            role="menuitem"
          >
            {{ settings.text().nav.portfolio }}
          </a>
          <a
            routerLink="/blog"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            role="menuitem"
          >
            {{ settings.text().nav.blog }}
          </a>
          <a
            routerLink="/website-audit"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            role="menuitem"
          >
            Audit
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            role="menuitem"
          >
            {{ settings.text().nav.contact }}
          </a>

          <!-- CTA -->
          <a
            routerLink="/contact"
            class="ml-2 rounded-md bg-zinc-900 dark:bg-white px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold text-white dark:text-zinc-900 hover:opacity-90 transition-all whitespace-nowrap"
          >
            Agendar llamada
          </a>
        </div>

        <!-- ACTIONS -->
        <div class="flex items-center gap-3">
          <!-- LANGUAGE -->
          <button
            (click)="settings.toggleLang()"
            [attr.aria-label]="'Cambiar idioma a ' + (settings.language() === 'es' ? 'inglés' : 'español')"
            class="flex items-center justify-center h-9 px-3 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-xs font-bold uppercase w-10"
          >
            {{ settings.language().toUpperCase() }}
          </button>

          <!-- THEME -->
          <button
            (click)="settings.toggleTheme()"
            [attr.aria-label]="settings.theme() === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
            class="flex items-center justify-center h-9 w-9 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            @if (settings.theme() === 'dark') {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            }
          </button>

          <!-- MOBILE MENU BUTTON -->
          <button
            (click)="isOpen.set(!isOpen())"
            [attr.aria-expanded]="isOpen()"
            aria-controls="mobile-menu"
            aria-label="Abrir menú de navegación"
            class="md:hidden flex items-center justify-center h-9 w-9 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            @if (isOpen()) {
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            } @else {
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- MOBILE MENU -->
      <div
        id="mobile-menu"
        class="md:hidden overflow-hidden transition-all duration-300"
        [class.max-h-0]="!isOpen()"
        [class.opacity-0]="!isOpen()"
        [class.max-h-96]="isOpen()"
        [class.opacity-100]="isOpen()"
        role="menu"
        [attr.aria-hidden]="!isOpen()"
      >
        <div
          class="bg-white dark:bg-zinc-950 p-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col space-y-1"
        >
          <a routerLink="/" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" role="menuitem">
            {{ settings.text().nav.home }}
          </a>
          <a routerLink="/services" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" role="menuitem">
            {{ settings.text().nav.services }}
          </a>
          <a routerLink="/portfolio" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" role="menuitem">
            {{ settings.text().nav.portfolio }}
          </a>
          <a routerLink="/blog" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" role="menuitem">
            {{ settings.text().nav.blog }}
          </a>
          <a routerLink="/website-audit" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" role="menuitem">
            Website Audit
          </a>
          <a routerLink="/contact" (click)="isOpen.set(false)" class="block px-3 py-2.5 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" role="menuitem">
            {{ settings.text().nav.contact }}
          </a>
          <div class="pt-2 border-t border-zinc-100 dark:border-zinc-800 mt-2">
            <a routerLink="/contact" (click)="isOpen.set(false)" class="block w-full text-center rounded-md bg-zinc-900 dark:bg-white px-4 py-2.5 text-sm font-semibold text-white dark:text-zinc-900 hover:opacity-90 transition-all">
              Agendar llamada
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class Navbar implements OnDestroy {
  readonly settings = inject(Settings);
  readonly isOpen = signal(false);
  readonly scrolled = signal(false);
  private platformId = inject(PLATFORM_ID);
  private scrollHandler: (() => void) | null = null;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollHandler = () => this.scrolled.set(window.scrollY > 20);
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
