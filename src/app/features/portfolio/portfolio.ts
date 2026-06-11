import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-base font-semibold leading-7 text-sky-500 uppercase tracking-widest">
            {{ settings.text().portfolio.label }}
          </h2>

          <p
            class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            {{ settings.text().portfolio.title }}
          </p>

          <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {{ settings.text().portfolio.subtitle }}
          </p>
        </div>

        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          @for (project of settings.text().portfolio.items; track project.id; let i = $index) {
            <article
              class="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="relative w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 aspect-[16/9] border border-zinc-200 dark:border-zinc-700"
              >
                <img
                  [ngSrc]="project.image"
                  [alt]="project.title"
                  [priority]="i < 2"
                  fill
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  class="absolute inset-0 ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10"
                ></div>
              </div>

              <div class="max-w-xl">
                @if (project.category) {
                  <p
                    class="mt-6 text-xs font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400"
                  >
                    {{ project.category }}
                  </p>
                }

                <div
                  class="flex items-center gap-x-3 text-xs"
                  [class.mt-2]="project.category"
                  [class.mt-6]="!project.category"
                >
                  @for (tag of project.tags; track tag) {
                    <span
                      class="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-zinc-600 dark:text-zinc-300 text-xs font-medium"
                    >
                      {{ tag }}
                    </span>
                  }
                </div>

                <div class="relative">
                  <h3
                    class="mt-3 text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-sky-500 transition-colors"
                  >
                    {{ project.title }}
                  </h3>

                  <p class="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {{ project.desc }}
                  </p>

                  @if (project.result) {
                    <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                      {{ project.result }}
                    </p>
                  }
                </div>

                @if (project.link) {
                  <div class="flex items-center gap-4 mt-6">
                    <a
                      [href]="project.link"
                      target="_blank"
                      class="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 ring-1 ring-inset ring-sky-500/20 transition-all hover:bg-sky-100 dark:hover:bg-sky-500/20 hover:scale-105"
                    >
                      {{ settings.text().portfolio.preview_suffix }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  </div>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Portfolio {
  public settings = inject(Settings);
}
