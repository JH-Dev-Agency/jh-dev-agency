import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type SchemaType = 'Organization' | 'WebSite' | 'WebPage' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'Service';

@Injectable({ providedIn: 'root' })
export class SchemaService {
  private document = inject(DOCUMENT);
  private readonly scriptIdPrefix = 'schema-ld-';

  /**
   * Injects or updates a JSON-LD script tag identified by type.
   * Safe for SSR + SPA navigation — no duplicates.
   */
  setSchema(type: SchemaType, schema: Record<string, unknown>): void {
    const id = `${this.scriptIdPrefix}${type}`;
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': type, ...schema });
  }

  removeSchema(type: SchemaType): void {
    const el = this.document.getElementById(`${this.scriptIdPrefix}${type}`);
    el?.remove();
  }

  /** Shortcut for the Organization schema — set once globally */
  setOrganization(): void {
    this.setSchema('Organization', {
      name: 'JH Dev Agency',
      url: 'https://jhdevagency.com',
      logo: 'https://jhdevagency.com/assets/logo.png',
      sameAs: ['https://github.com/JH-Dev-Agency'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Puebla',
        addressCountry: 'MX',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@jhdevagency.com',
        availableLanguage: ['Spanish', 'English'],
      },
    });
  }

  /** Shortcut for WebSite schema with SearchAction */
  setWebSite(): void {
    this.setSchema('WebSite', {
      name: 'JH Dev Agency',
      url: 'https://jhdevagency.com',
      inLanguage: 'es',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://jhdevagency.com/blog?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    });
  }
}
