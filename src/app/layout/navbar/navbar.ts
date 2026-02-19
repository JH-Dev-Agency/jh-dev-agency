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
      class="fixed top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-all duration-300"
    >
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a routerLink="/" class="flex items-center gap-2 group">
          <div
            class="relative flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black transition-transform group-hover:scale-105 shadow-lg shadow-zinc-500/20"
          >
            <span class="font-mono text-lg font-bold tracking-tighter">JH</span>
          </div>
          <span class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-sans"
            >Dev Agency</span
          >
        </a>

        <div class="hidden md:flex md:items-center md:gap-8">
          <a
            routerLink="/"
            routerLinkActive="text-sky-500 font-semibold"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            {{ settings.text().nav.home }}
          </a>

          <a
            routerLink="/services"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            {{ settings.text().nav.services }}
          </a>

          <a
            routerLink="/portfolio"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            {{ settings.text().nav.portfolio }}
          </a>

          <a
            routerLink="/blog"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            {{ settings.text().nav.blog }}
          </a>

          <a
            routerLink="/contact"
            routerLinkActive="text-sky-500 font-semibold"
            class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            {{ settings.text().nav.contact }}
          </a>
        </div>

        <div class="flex items-center gap-3">
          <button
            (click)="settings.toggleLang()"
            class="flex items-center justify-center h-9 px-3 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-xs font-bold uppercase w-10 cursor-pointer"
          >
            {{ settings.language() }}
          </button>

          <button
            (click)="settings.toggleTheme()"
            class="flex items-center justify-center h-9 w-9 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
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
            (click)="isOpen.set(!isOpen())"
            class="md:hidden flex items-center justify-center h-9 w-9 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
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

      <div
        class="md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        [class.max-h-0]="!isOpen()"
        [class.opacity-0]="!isOpen()"
        [class.max-h-80]="isOpen()"
        [class.opacity-100]="isOpen()"
      >
        <div
          class="bg-white dark:bg-zinc-950 p-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col space-y-1"
        >
          <a
            routerLink="/"
            (click)="isOpen.set(false)"
            class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            [class.opacity-0]="!isOpen()"
            [class.translate-y-[-6px]]="!isOpen()"
            [class.opacity-100]="isOpen()"
            [class.translate-y-0]="isOpen()"
            [style.transitionDelay]="isOpen() ? '50ms' : '0ms'"
            >{{ settings.text().nav.home }}</a
          >
          <a
            routerLink="/services"
            (click)="isOpen.set(false)"
            class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            [class.opacity-0]="!isOpen()"
            [class.translate-y-[-6px]]="!isOpen()"
            [class.opacity-100]="isOpen()"
            [class.translate-y-0]="isOpen()"
            [style.transitionDelay]="isOpen() ? '90ms' : '0ms'"
            >{{ settings.text().nav.services }}</a
          >
          <a
            routerLink="/portfolio"
            (click)="isOpen.set(false)"
            class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            [class.opacity-0]="!isOpen()"
            [class.translate-y-[-6px]]="!isOpen()"
            [class.opacity-100]="isOpen()"
            [class.translate-y-0]="isOpen()"
            [style.transitionDelay]="isOpen() ? '130ms' : '0ms'"
            >{{ settings.text().nav.portfolio }}</a
          >
          <a
            routerLink="/blog"
            (click)="isOpen.set(false)"
            class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            [class.opacity-0]="!isOpen()"
            [class.translate-y-[-6px]]="!isOpen()"
            [class.opacity-100]="isOpen()"
            [class.translate-y-0]="isOpen()"
            [style.transitionDelay]="isOpen() ? '170ms' : '0ms'"
            >{{ settings.text().nav.blog }}</a
          >
          <a
            routerLink="/contact"
            (click)="isOpen.set(false)"
            class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            [class.opacity-0]="!isOpen()"
            [class.translate-y-[-6px]]="!isOpen()"
            [class.opacity-100]="isOpen()"
            [class.translate-y-0]="isOpen()"
            [style.transitionDelay]="isOpen() ? '210ms' : '0ms'"
            >{{ settings.text().nav.contact }}</a
          >
        </div>
      </div>
    </nav>
  `,
  // Nota: Hemos eliminado el array 'styles' para evitar el error de @apply
})
export class Navbar {
  public settings = inject(Settings);
  readonly isOpen = signal(false);
}
