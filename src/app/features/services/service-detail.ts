import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (service(); as s) {
      <div
        class="relative isolate overflow-hidden bg-white dark:bg-zinc-950 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 transition-colors duration-300"
      >
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p
                  class="text-base font-semibold leading-7 text-sky-500 uppercase tracking-wide mb-2"
                >
                  <a routerLink="/services" class="hover:underline">Services</a> / {{ s.title }}
                </p>

                <h1
                  class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
                >
                  {{ s.title }}
                </h1>
                <p class="mt-6 text-xl leading-8 text-zinc-700 dark:text-zinc-300">
                  {{ s.details.intro }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          >
            <div
              class="rounded-xl bg-zinc-900/5 dark:bg-zinc-100/5 p-2 ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10 lg:rounded-2xl lg:p-4"
            >
              <div
                class="aspect-[4/3] w-full rounded-md bg-gradient-to-br from-sky-500/20 to-indigo-600/20 flex items-center justify-center"
              >
                <div class="text-sky-500">
                  @if (s.icon === 'code') {
                    <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  }
                  @if (s.icon === 'cpu') {
                    <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  @if (s.icon === 'layers') {
                    <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                      />
                      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                    </svg>
                  }
                  @if (s.icon === 'cloud') {
                    <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.1-2.9-2.4-5.2-5.3-5.3h-.1c-3 0-5.4 2.4-5.4 5.4v.6c-2.4.4-4.2 2.6-4.1 5.1C-1.4 24.6 1.2 27 4 27h13.5c3.2-.2 5.7-2.9 5.5-6.1v-.4c0-2.8-2.2-5.1-5-5.5h-.5Z"
                      />
                    </svg>
                  }
                </div>
              </div>
            </div>
          </div>

          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div class="lg:pr-4">
              <div
                class="max-w-xl text-base leading-7 text-zinc-700 dark:text-zinc-300 lg:max-w-lg"
              >
                <ul role="list" class="space-y-8 text-zinc-600 dark:text-zinc-400">
                  @for (feature of s.details.features; track feature) {
                    <li class="flex gap-x-3">
                      <svg
                        class="mt-1 h-5 w-5 flex-none text-sky-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.04-8.88C5.23 3.889 9.127 0 14 0h1a4.5 4.5 0 014.375 5.584A6 6 0 0113.833 17H5.5zm1.25-8.25a.75.75 0 011.066.02L10.5 11.23l4.286-5.013a.75.75 0 011.144.975l-5 5.85a.75.75 0 01-1.183-.046l-2.5-3.25a.75.75 0 01.003-1.066z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>{{ feature }}</span>
                    </li>
                  }
                </ul>

                <div class="mt-10 flex items-center gap-x-6">
                  <a
                    routerLink="/contact"
                    class="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    {{ s.details.cta }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    } @else {
      <div class="py-32 text-center text-zinc-500">Service not found...</div>
    }
  `,
})
export class ServiceDetail {
  private route = inject(ActivatedRoute);
  public settings = inject(Settings);

  // 1. Obtener el 'slug' de la URL (Reactivo)
  private slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))));

  // 2. Buscar el servicio correspondiente en los settings
  public service = computed(() => {
    const currentSlug = this.slug();
    const allServices = this.settings.text().services.items;
    return allServices.find((item) => item.slug === currentSlug);
  });
}
