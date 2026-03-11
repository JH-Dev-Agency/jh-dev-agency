import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';
import { SeoService } from '../../core/seo/seoService';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 sm:py-32 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {{ settings.text().blog.title }}
          </h2>

          <p class="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {{ settings.text().blog.subtitle }}
          </p>

          @if (settings.text().blog.author_line) {
            <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              {{ settings.text().blog.author_line }}
            </p>
          }
        </div>

        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          @for (post of settings.text().blog.posts; track post.id) {
            <article
              [routerLink]="['/blog', post.id]"
              class="flex flex-col items-start justify-between p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white dark:bg-zinc-900"
            >
              <div class="flex items-center gap-x-4 text-xs">
                <time class="text-zinc-500">{{ post.date }}</time>

                <span
                  class="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 font-medium text-zinc-600 dark:text-zinc-300"
                >
                  {{ post.category }}
                </span>
              </div>

              <div class="relative">
                <h3
                  class="mt-3 text-lg font-semibold leading-6 text-zinc-900 dark:text-white group-hover:text-sky-500 transition-colors"
                >
                  {{ post.title }}
                </h3>

                <p class="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {{ post.excerpt }}
                </p>

                @if (post.benefit) {
                  <p class="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-500">
                    {{ post.benefit }}
                  </p>
                }
              </div>

              <div class="relative mt-8 flex items-center gap-x-4">
                <div
                  class="relative h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-500 dark:text-zinc-400"
                >
                  JH
                </div>

                <div class="text-sm leading-6">
                  <p class="font-semibold text-zinc-900 dark:text-white">José Horacio</p>

                  <p class="text-zinc-600 dark:text-zinc-500">
                    {{ post.readTime }}
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
export class Blog {
  settings = inject(Settings);
  seo = inject(SeoService);

  constructor() {
    this.seo.updateSeo({
      title: 'Blog de Ingeniería de Software | JH Dev Agency',
      description:
        'Ideas, análisis técnicos y estrategias sobre desarrollo web, arquitectura moderna e inteligencia artificial.',
      url: 'https://jhdevagency.com/blog',
    });
  }
}
