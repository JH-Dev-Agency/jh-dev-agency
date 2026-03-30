import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seoService';
import { SchemaService } from '../../core/seo/schemaService';
import { ContentService } from '../../core/state/content.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 sm:py-32 bg-white dark:bg-zinc-950">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        @if (post(); as p) {

          <!-- Breadcrumb -->
          <nav aria-label="Breadcrumb" class="mb-8">
            <ol class="flex items-center gap-2 text-sm text-zinc-500">
              <li><a routerLink="/blog" class="hover:text-sky-500 transition-colors">Blog</a></li>
              <li aria-hidden="true">/</li>
              <li class="text-zinc-900 dark:text-white truncate max-w-xs">{{ p.title }}</li>
            </ol>
          </nav>

          <!-- Header -->
          <div class="mb-10">
            <span class="inline-block rounded-full bg-sky-100 dark:bg-sky-900/30 px-3 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-4">
              {{ p.category }}
            </span>
            <h1 class="text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
              {{ p.title }}
            </h1>
            <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              {{ p.excerpt }}
            </p>

            <div class="mt-6 flex items-center gap-4 text-sm text-zinc-500 border-b border-zinc-200 dark:border-zinc-800 pb-6">
              <div class="flex items-center gap-2">
                <div class="h-8 w-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-xs text-zinc-500">
                  JH
                </div>
                <span class="font-medium text-zinc-700 dark:text-zinc-300">José Horacio</span>
              </div>
              <span aria-hidden="true">·</span>
              <time>{{ p.date }}</time>
              <span aria-hidden="true">·</span>
              <span>{{ p.readTime }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="prose-content space-y-6 text-zinc-700 dark:text-zinc-300">
            @for (block of p.content; track $index) {
              @if (block.type === 'h2') {
                <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">
                  {{ block.text }}
                </h2>
              }
              @if (block.type === 'h3') {
                <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-3">
                  {{ block.text }}
                </h3>
              }
              @if (block.type === 'p') {
                <p class="leading-relaxed text-base">{{ block.text }}</p>
              }
              @if (block.type === 'blockquote') {
                <blockquote class="border-l-4 border-sky-500 pl-4 italic text-zinc-500 dark:text-zinc-400">
                  {{ block.text }}
                </blockquote>
              }
            }
          </div>

          <!-- CTA -->
          <div class="mt-16 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 text-center">
            <p class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">¿Quieres aplicar esto en tu negocio?</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Agenda una llamada de 30 min y lo revisamos juntos.</p>
            <a
              routerLink="/contact"
              class="inline-flex rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 transition-colors"
            >
              Agendar llamada →
            </a>
          </div>

          <!-- Back -->
          <div class="mt-10">
            <a routerLink="/blog" class="text-sm text-sky-500 hover:text-sky-400 transition-colors">
              ← Volver al blog
            </a>
          </div>

        } @else {
          <div class="py-32 text-center">
            <p class="text-zinc-500 mb-4">Artículo no encontrado.</p>
            <a routerLink="/blog" class="text-sky-500 hover:underline text-sm">← Volver al blog</a>
          </div>
        }
      </div>
    </section>
  `,
})
export class Post {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  private schema = inject(SchemaService);
  private content = inject(ContentService);

  private id = Number(this.route.snapshot.paramMap.get('id'));

  post = computed(() => this.content.getPostById(this.id));

  constructor() {
    const p = this.post();
    if (!p) return;

    this.seo.updateSeo({
      title: `${p.title} | JH Dev Agency`,
      description: p.excerpt,
      url: `https://jhdevagency.com/blog/${this.id}`,
      image: 'https://jhdevagency.com/og_image.jpg',
      type: 'article',
    });

    this.schema.setSchema('Article', {
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      author: {
        '@type': 'Person',
        name: 'José Horacio',
        url: 'https://jhdevagency.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'JH Dev Agency',
        logo: {
          '@type': 'ImageObject',
          url: 'https://jhdevagency.com/assets/logo.png',
        },
      },
      mainEntityOfPage: `https://jhdevagency.com/blog/${this.id}`,
      image: 'https://jhdevagency.com/og_image.jpg',
    });
  }
}
