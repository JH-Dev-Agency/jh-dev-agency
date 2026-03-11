import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
          @for (project of settings.text().portfolio.items; track project.id) {
            <article
              class="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <!-- IMAGE -->
              <div
                class="relative w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 aspect-[16/9] border border-zinc-200 dark:border-zinc-700"
              >
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  class="absolute inset-0 ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10"
                ></div>
              </div>

              <!-- CONTENT -->
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
