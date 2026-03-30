import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main
      class="grid min-h-[80vh] place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-white dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden"
    >
      <div
        class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>

      <div class="text-center">
        <p
          class="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 animate-pulse"
        >
          {{ settings.text().notFound.code }}
        </p>

        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
        >
          {{ settings.text().notFound.title }}
        </h1>

        <p class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {{ settings.text().notFound.desc }}
        </p>

        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            routerLink="/"
            class="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all hover:scale-105"
          >
            {{ settings.text().notFound.btn }}
          </a>
        </div>
      </div>
    </main>
  `,
})
export class NotFound {
  public settings = inject(Settings);
}
