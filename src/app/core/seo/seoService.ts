import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  updateSeo(config: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
  }) {
    this.title.setTitle(config.title);

    this.meta.updateTag({
      name: 'description',
      content: config.description,
    });

    if (config.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: config.keywords,
      });
    }

    // OpenGraph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });

    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }

    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
