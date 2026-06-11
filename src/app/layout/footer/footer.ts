import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer
      class="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <!-- Brand -->
          <div class="space-y-8">
            <a routerLink="/" class="flex items-center gap-2 group" aria-label="JH Dev Agency — Inicio">
              <div
                class="relative flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black font-bold font-mono text-lg transition-transform group-hover:scale-105"
                aria-hidden="true"
              >
                JH
              </div>
              <span class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-sans">
                {{ settings.text().brandShort }}
              </span>
            </a>
            <p class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 max-w-xs">
              {{ settings.text().footer.tagline }}
            </p>

            <!-- Social links -->
            <div class="flex space-x-4 items-center">
              <a
                href="https://github.com/JH-Dev-Agency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JH Dev Agency en GitHub"
                class="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590624575370"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JH Dev Agency en Facebook"
                class="text-zinc-500 hover:text-blue-500 transition-colors"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>
              <a
                href="https://wa.me/522464637426"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                class="text-zinc-500 hover:text-emerald-500 transition-colors"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-zinc-900 dark:text-white">
                  {{ settings.text().footer.sections.company }}
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a routerLink="/" class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors">
                      {{ settings.text().nav.home }}
                    </a>
                  </li>
                  <li>
                    <a routerLink="/services" class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors">
                      {{ settings.text().nav.services }}
                    </a>
                  </li>
                  <li>
                    <a routerLink="/portfolio" class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors">
                      {{ settings.text().nav.portfolio }}
                    </a>
                  </li>
                  <li>
                    <a routerLink="/blog" class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors">
                      {{ settings.text().nav.blog }}
                    </a>
                  </li>
                  <li>
                    <a routerLink="/website-audit" class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors">
                      Website Audit
                    </a>
                  </li>
                  <li>
                    <a routerLink="/contact" class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors">
                      {{ settings.text().nav.contact }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-zinc-900 dark:text-white">
                  {{ settings.text().footer.sections.legal }}
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="#" class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors">
                      {{ settings.text().footer.links.privacy }}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors">
                      {{ settings.text().footer.links.terms }}
                    </a>
                  </li>
                </ul>

                <!-- Contact CTA -->
                <div class="mt-10">
                  <h3 class="text-sm font-semibold leading-6 text-zinc-900 dark:text-white mb-4">
                    ¿Listo para empezar?
                  </h3>
                  <a
                    routerLink="/contact"
                    class="inline-flex rounded-md bg-zinc-900 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-zinc-900 hover:opacity-90 transition-all"
                  >
                    Agendar llamada →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p class="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {{ currentYear() }} {{ settings.text().brandName }}.
            {{ settings.text().footer.rights }}
          </p>
          <p class="text-xs text-zinc-400 dark:text-zinc-600">
            Hecho con Angular 19 · Desplegado en Vercel
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  public settings = inject(Settings);
  readonly currentYear = computed(() => new Date().getFullYear());
}
