import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';
import { SeoService } from '../../core/seo/seoService';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 sm:py-32 bg-white dark:bg-zinc-950">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        @if (post(); as postData) {
          <p class="text-sm text-sky-500 mb-2">
            {{ postData.category }}
          </p>

          <h1 class="text-4xl font-bold text-zinc-900 dark:text-white">
            {{ postData.title }}
          </h1>

          <p class="mt-4 text-zinc-600 dark:text-zinc-400">
            {{ postData.excerpt }}
          </p>

          <div class="mt-8 text-sm text-zinc-500">
            {{ postData.date }} · {{ postData.readTime }}
          </div>

          <!-- CONTENIDO DEL POST -->
          <div class="mt-12 space-y-6">
            @if (postData.content?.length) {
              @for (block of postData.content; track $index) {
                @if (block.type === 'h2') {
                  <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mt-10">
                    {{ block.text }}
                  </h2>
                }

                @if (block.type === 'p') {
                  <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {{ block.text }}
                  </p>
                }
              }
            } @else {
              <p class="text-zinc-500">Este artículo aún no tiene contenido disponible.</p>
            }
          </div>
        } @else {
          <p class="text-center text-zinc-500">Artículo no encontrado</p>
        }

        <div class="mt-12">
          <a routerLink="/blog" class="text-sky-500 hover:underline"> ← Volver al blog </a>
        </div>
      </div>
    </section>
  `,
})
export class Post {
  settings = inject(Settings);
  route = inject(ActivatedRoute);
  seo = inject(SeoService);

  id = this.route.snapshot.paramMap.get('id');

  post = computed<any>(() => {
    return this.settings.text().blog.posts.find((p: any) => String(p.id) === this.id);
  });

  constructor() {
    const postData = this.post();

    if (postData) {
      this.seo.updateSeo({
        title: postData.title + ' | JH Dev Agency',
        description: postData.excerpt,
        url: 'https://jhdevagency.com/blog/' + this.id,
      });
    }
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: postData.title,
      description: postData.excerpt,
      author: {
        '@type': 'Person',
        name: 'José Horacio',
      },
      publisher: {
        '@type': 'Organization',
        name: 'JH Dev Agency',
      },
      mainEntityOfPage: 'https://jhdevagency.com/blog/' + this.id,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);

    document.head.appendChild(script);
  }
}
