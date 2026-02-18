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
            Portfolio
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
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          @for (project of settings.text().portfolio.items; track project.id) {
            <article class="flex flex-col items-start group">
              <div
                class="relative w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2] border border-zinc-200 dark:border-zinc-700"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out"
                ></div>

                <div class="absolute inset-0 flex items-center justify-center">
                  <span
                    class="text-zinc-500 font-mono text-xl group-hover:text-sky-500 transition-colors"
                  >
                    {{ project.title }} Preview
                  </span>
                </div>

                <div
                  class="absolute inset-0 ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10"
                ></div>
              </div>

              <div class="max-w-xl">
                <div class="mt-8 flex items-center gap-x-4 text-xs">
                  @for (tag of project.tags; track tag) {
                    <span
                      class="relative z-10 rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      {{ tag }}
                    </span>
                  }
                </div>

                <div class="group relative">
                  <h3
                    class="mt-3 text-lg font-semibold leading-6 text-zinc-900 dark:text-white group-hover:text-sky-500 transition-colors"
                  >
                    <a routerLink="/contact">
                      <span class="absolute inset-0"></span>
                      {{ project.title }}
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {{ project.desc }}
                  </p>
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
