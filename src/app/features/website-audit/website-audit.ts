import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../../core/state/settings';
import { SeoService } from '../../core/seo/seoService';

@Component({
  selector: 'website-audit',
  standalone: true,
  templateUrl: './website-audit.html',
})
export class WebsiteAudit {
  url = signal('');
  loading = signal(false);
  result = signal<any>(null);
  error = signal('');
  settings = inject(Settings);

  seo = inject(SeoService);
  constructor(private http: HttpClient) {
    this.seo.updateSeo({
      title: 'Website Audit Tool | Analyze Website Speed & SEO',
      description:
        'Free website audit tool powered by Google Lighthouse. Analyze your website speed, SEO score, accessibility and performance in seconds.',
      url: 'https://jhdevagency.com/audit',
    });
  }

  analyze() {
    let site = this.url().trim();
    if (!site) return;

    // asegurar https
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
