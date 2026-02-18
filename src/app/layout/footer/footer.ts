import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer
      class="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <a routerLink="/" class="flex items-center gap-2 group">
              <div
                class="relative flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black font-bold font-mono text-lg transition-transform group-hover:scale-105"
              >
                JH
              </div>
              <span
                class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-sans"
              >
                Dev Studio
              </span>
            </a>
            <p class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 max-w-xs">
              {{ settings.text().footer.tagline }}
            </p>

            <div class="flex space-x-6">
              <a
                href="#"
                class="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-zinc-900 dark:text-white">
                  {{ settings.text().footer.sections.company }}
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a
                      routerLink="/"
                      class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                      >{{ settings.text().nav.home }}</a
                    >
                  </li>
                  <li>
                    <a
                      routerLink="/services"
                      class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                      >{{ settings.text().nav.services }}</a
                    >
                  </li>
                  <li>
                    <a
                      routerLink="/portfolio"
                      class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                      >{{ settings.text().nav.portfolio }}</a
                    >
                  </li>
                  <li>
                    <a
                      routerLink="/blog"
                      class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                      >{{ settings.text().nav.blog }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-zinc-900 dark:text-white">
                  {{ settings.text().footer.sections.legal }}
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                      >{{ settings.text().footer.links.privacy }}</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                      >{{ settings.text().footer.links.terms }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-8 sm:mt-20 lg:mt-24">
          <p class="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {{ currentYear() }} JH Dev Studio. {{ settings.text().footer.rights }}
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  public settings = inject(Settings);
  readonly currentYear = computed(() => new Date().getFullYear());
}
