import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Settings } from '../../core/state/settings';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-base font-semibold leading-7 text-sky-500 uppercase tracking-widest">
            JH Dev Agency
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            {{ settings.text().services.title }}
          </p>
          <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {{ settings.text().services.subtitle }}
          </p>
        </div>

        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            @for (service of settings.text().services.items; track service.title) {
              <div
                class="flex flex-col group p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1"
              >
                <dt
                  class="flex items-center gap-x-3 text-base font-semibold leading-7 text-zinc-900 dark:text-white"
                >
                  <div
                    class="h-10 w-10 flex items-center justify-center rounded-lg bg-sky-500/10 group-hover:bg-sky-500 text-sky-600 group-hover:text-white transition-colors duration-300"
                  >
                    @if (service.icon === 'code') {
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
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    }
                    @if (service.icon === 'cpu') {
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
                      >
                        <rect width="16" height="16" x="4" y="4" rx="2" />
                        <rect width="6" height="6" x="9" y="9" rx="1" />
                        <path d="M15 2v2" />
                        <path d="M15 20v2" />
                        <path d="M2 15h2" />
                        <path d="M2 9h2" />
                        <path d="M20 15h2" />
                        <path d="M20 9h2" />
                        <path d="M9 2v2" />
                        <path d="M9 20v2" />
                      </svg>
                    }
                    @if (service.icon === 'layers') {
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
                      >
                        <path
                          d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                        />
                        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                      </svg>
                    }
                    @if (service.icon === 'cloud') {
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
                      >
                        <path
                          d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.1-2.9-2.4-5.2-5.3-5.3h-.1c-3 0-5.4 2.4-5.4 5.4v.6c-2.4.4-4.2 2.6-4.1 5.1C-1.4 24.6 1.2 27 4 27h13.5c3.2-.2 5.7-2.9 5.5-6.1v-.4c0-2.8-2.2-5.1-5-5.5h-.5Z"
                        />
                      </svg>
                    }
                  </div>
                  {{ service.title }}
                </dt>
                <dd
                  class="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600 dark:text-zinc-400"
                >
                  <p class="flex-auto">{{ service.desc }}</p>
                  <p class="mt-6">
                    <a
                      [routerLink]="['/services', service.slug]"
                      class="text-sm font-semibold leading-6 text-sky-500 hover:text-sky-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-1"
                    >
                      Más información <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            }
          </dl>
        </div>
      </div>
    </section>
  `,
})
export class Services {
  public settings = inject(Settings);
}
