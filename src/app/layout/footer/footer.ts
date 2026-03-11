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
                {{ settings.text().brandShort }}
              </span>
            </a>
            <p class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 max-w-xs">
              {{ settings.text().footer.tagline }}
            </p>

            <div class="flex space-x-6"></div>
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
                  <li>
                    <a
                      routerLink="/contact"
                      class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                    >
                      {{ settings.text().nav.contact }}
                    </a>
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
            &copy; {{ currentYear() }} {{ settings.text().brandName }}.
            {{ settings.text().footer.rights }}
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
