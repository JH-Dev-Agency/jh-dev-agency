import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../../core/state/settings';
import { SeoService } from '../../core/seo/seoService';
import { CommonModule } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'website-audit',
  standalone: true,
  templateUrl: './website-audit.html',
  imports: [CommonModule, RouterModule],
})
export class WebsiteAudit {
  url = signal('');
  loading = signal(false);
  result = signal<any>(null);
  error = signal('');

  private platformId = inject(PLATFORM_ID);

  settings = inject(Settings);
  seo = inject(SeoService);

  constructor(private http: HttpClient) {
    this.seo.updateSeo({
      title: 'Free Website Speed Test & SEO Audit Tool | JH Dev Agency',
      description:
        'Analyze your website speed, SEO score, accessibility and best practices with our free Google Lighthouse powered audit tool.',
      keywords: 'website speed test, seo audit tool, lighthouse test, website performance checker',
      url: 'https://jhdevagency.com/website-audit',
    });

    this.addSchema();
  }

  private addSchema() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (document.querySelector('#audit-schema')) return;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Website Speed Test & SEO Audit Tool',
      url: 'https://jhdevagency.com/website-audit',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      description: 'Free website speed test and SEO audit tool powered by Google Lighthouse.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'audit-schema';
    script.text = JSON.stringify(schema);

    document.head.appendChild(script);
  }

  analyze() {
    let site = this.url().trim();

    if (!site) return;

    if (!site.startsWith('http')) {
      site = 'https://' + site;
    }

    this.loading.set(true);
    this.error.set('');
    this.result.set(null);

    const api =
      'https://www.googleapis.com/pagespeedonline/v5/runPagespeed' +
      '?url=' +
      encodeURIComponent(site) +
      '&category=performance' +
      '&category=seo' +
      '&category=accessibility' +
      '&category=best-practices' +
      '&strategy=mobile' +
      '&key=AIzaSyAwUeXOALIuN2Z3plXQtbhiVU8E4XwBaYI';

    this.http.get(api).subscribe({
      next: (data: any) => {
        if (!data?.lighthouseResult?.categories) {
          this.error.set('Failed to retrieve Lighthouse results.');
          this.loading.set(false);
          return;
        }

        const categories = data.lighthouseResult.categories;

        this.result.set({
          performance: Math.round((categories?.performance?.score ?? 0) * 100),
          seo: Math.round((categories?.seo?.score ?? 0) * 100),
          accessibility: Math.round((categories?.accessibility?.score ?? 0) * 100),
          bestPractices: Math.round((categories?.['best-practices']?.score ?? 0) * 100),
        });

        this.loading.set(false);
      },

      error: (err) => {
        console.error('PageSpeed API error:', err);
        this.error.set('Error analyzing the website. Please try again.');
        this.loading.set(false);
      },
    });
  }
}
