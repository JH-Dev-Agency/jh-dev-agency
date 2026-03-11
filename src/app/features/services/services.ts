import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Settings } from '../../core/state/settings';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seoService';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-base font-semibold leading-7 text-sky-500 uppercase tracking-widest">
            {{ settings.text().brandName }}
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
                [routerLink]="['/services', service.slug]"
                class="flex flex-col group p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 cursor-pointer"
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
                      >
                        <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" />
                        <path d="M16 16l-4 4-4-4" />
                      </svg>
                    }
                  </div>

                  {{ service.title }}
                </dt>

                <dd class="mt-4 flex flex-auto flex-col text-zinc-600 dark:text-zinc-400">
                  <p class="flex-auto text-sm leading-relaxed">
                    {{ service.desc }}
                  </p>

                  @if (service.use_case) {
                    <p
                      class="mt-3 text-sm italic text-zinc-500 dark:text-zinc-500 border-l-2 border-sky-500/30 pl-3"
                    >
                      {{ service.use_case }}
                    </p>
                  }

                  <p class="mt-6 text-sm font-semibold text-sky-500 inline-flex items-center gap-1">
                    {{ settings.text().services.more_info }}
                    <span aria-hidden="true">→</span>
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
  seo = inject(SeoService);
  constructor() {
    this.seo.updateSeo({
      title: 'Servicios de Desarrollo Web, IA y SaaS | JH Dev Agency',
      description:
        'Servicios de desarrollo web de alto rendimiento, automatización con inteligencia artificial y desarrollo de productos SaaS.',
      keywords: 'desarrollo web profesional, automatización con IA, desarrollo SaaS',
      url: 'https://jhdevagency.com/services',
    });
  }
}
