import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';
import { SeoService } from '../../core/seo/seoService';

type LegalDoc = 'privacy' | 'terms';

interface LegalSection {
  title: string;
  body: string[];
  list?: string[];
}

interface LegalDocContent {
  title: string;
  updated: string;
  back_home: string;
  contact_line: string;
  sections: LegalSection[];
}

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 sm:py-32 bg-white dark:bg-zinc-950">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {{ doc().title }}
        </h1>
        <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {{ doc().updated }}
        </p>

        <div class="mt-10 space-y-10">
          @for (section of doc().sections; track $index) {
            <div>
              <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                {{ section.title }}
              </h2>
              @for (paragraph of section.body; track $index) {
                <p class="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mb-3">
                  {{ paragraph }}
                </p>
              }
              @if (section.list) {
                <ul class="list-disc pl-6 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
                  @for (item of section.list; track $index) {
                    <li>{{ item }}</li>
                  }
                </ul>
              }
            </div>
          }
        </div>

        <div class="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p class="text-sm text-zinc-600 dark:text-zinc-400">
            {{ doc().contact_line }}
            <a href="mailto:contact@jhdevagency.com" class="text-sky-500 hover:text-sky-400 transition-colors">
              contact&#64;jhdevagency.com
            </a>
          </p>
          <a routerLink="/" class="mt-6 inline-block text-sm text-sky-500 hover:text-sky-400 transition-colors">
            ← {{ doc().back_home }}
          </a>
        </div>
      </div>
    </section>
  `,
})
export class LegalPage {
  public settings = inject(Settings);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  private docType: LegalDoc = this.route.snapshot.data['doc'] === 'terms' ? 'terms' : 'privacy';

  doc = computed<LegalDocContent>(() => this.settings.text().legal[this.docType]);

  constructor() {
    const isTerms = this.docType === 'terms';
    this.seo.updateSeo({
      title: isTerms ? 'Términos de Uso | JH Dev Agency' : 'Aviso de Privacidad | JH Dev Agency',
      description: isTerms
        ? 'Términos y condiciones de uso del sitio web y herramientas de JH Dev Agency.'
        : 'Aviso de privacidad de JH Dev Agency: qué datos recopilamos, con qué finalidad y cómo ejercer tus derechos.',
      url: `https://jhdevagency.com/${isTerms ? 'terms' : 'privacy'}`,
    });
  }
}
