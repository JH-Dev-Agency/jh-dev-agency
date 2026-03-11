import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { SeoService } from '../../core/seo/seoService';

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
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
        >
          <!-- HEADER -->
          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                  <a routerLink="/services" class="hover:text-sky-500 transition-colors">
                    {{ settings.text().nav.services }}
                  </a>
                  <span class="mx-2">/</span>
                  <span class="text-zinc-900 dark:text-white">
                    {{ s.title }}
                  </span>
                </p>

                <h1
                  class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
                >
                  {{ s.title }}
                </h1>

                <p class="mt-6 text-xl leading-8 text-zinc-700 dark:text-zinc-300">
                  {{ s.details.intro }}
                </p>

                @if (s.details['proof_line']) {
                  <p
                    class="mt-4 text-sm text-zinc-500 dark:text-zinc-500 italic border-l-2 border-sky-500/40 pl-4"
                  >
                    {{ s.details['proof_line'] }}
                  </p>
                }
              </div>
            </div>
          </div>

          <!-- ICON / VISUAL -->
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
                      <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" />
                      <path d="M16 16l-4 4-4-4" />
                    </svg>
                  }
                </div>
              </div>
            </div>
          </div>

          <!-- FEATURES -->
          <div
            class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div class="lg:pr-4">
              <div
                class="max-w-xl text-base leading-7 text-zinc-700 dark:text-zinc-300 lg:max-w-lg"
              >
                <ul role="list" class="space-y-6 text-zinc-600 dark:text-zinc-400">
                  @for (feature of s.details.features; track feature) {
                    <li class="flex gap-x-3">
                      <svg
                        class="mt-1 h-5 w-5 flex-none text-sky-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.41 7.41a1 1 0 01-1.42 0L3.296 9.54a1 1 0 011.42-1.42l3.17 3.17 6.7-6.7a1 1 0 011.42 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span>{{ feature }}</span>
                    </li>
                  }
                </ul>

                <div class="mt-10 flex flex-col gap-2">
                  <a
                    routerLink="/contact"
                    class="inline-flex w-fit rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500"
                  >
                    {{ s.details.cta }}
                  </a>

                  @if (s.details['cta_subline']) {
                    <p class="text-sm text-zinc-500 dark:text-zinc-500">
                      {{ s.details['cta_subline'] }}
                    </p>
                  }
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
  settings = inject(Settings);
  route = inject(ActivatedRoute);
  seo = inject(SeoService);

  slug = this.route.snapshot.paramMap.get('slug');

  service = computed<any>(() => {
    return this.settings.text().services.items.find((s: any) => s.slug === this.slug);
  });

  constructor() {
    const serviceData = this.service();

    if (serviceData) {
      this.seo.updateSeo({
        title: serviceData.title + ' | JH Dev Agency',
        description: serviceData.desc,
        url: 'https://jhdevagency.com/services/' + this.slug,
      });
    }
    this.seo.updateSeo({
      title: serviceData.title + ' | JH Dev Agency',
      description: serviceData.desc,
      url: 'https://jhdevagency.com/services/' + this.slug,
      image: 'https://jhdevagency.com/og-image.jpg',
    });
  }
}
