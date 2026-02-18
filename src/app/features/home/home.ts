import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importante para *ngFor
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="relative overflow-hidden">
      <section class="relative pt-20 pb-32 md:pt-32 xl:pb-40">
        <div
          class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]"
        >
          <div
            class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-500 opacity-20 blur-[100px]"
          ></div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div class="mb-8 flex justify-center">
            <div
              class="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400 ring-1 ring-zinc-900/10 dark:ring-zinc-100/10 hover:ring-zinc-900/20 dark:hover:ring-zinc-100/20 transition-all bg-white/50 dark:bg-transparent backdrop-blur-sm"
            >
              {{ settings.text().hero.badge }}
              <span class="font-semibold text-sky-600 dark:text-sky-400">High Performance</span>
            </div>
          </div>
          <h1 class="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
            {{ settings.text().hero.title_prefix }}
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 block sm:inline"
            >
              {{ settings.text().hero.title_gradient }}
            </span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            {{ settings.text().hero.subtitle }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              routerLink="/contact"
              class="rounded-md bg-zinc-900 dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:opacity-90 transition-all"
            >
              {{ settings.text().hero.cta_primary }}
            </a>
            <a
              routerLink="/portfolio"
              class="text-sm font-semibold leading-6 text-zinc-900 dark:text-white group"
            >
              {{ settings.text().hero.cta_secondary }}
              <span
                aria-hidden="true"
                class="inline-block transition-transform group-hover:translate-x-1"
                >→</span
              >
            </a>
          </div>
        </div>
      </section>

      <section
        class="py-12 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20"
      >
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <p class="text-center text-sm font-semibold text-zinc-500 mb-8 uppercase tracking-widest">
            Powering High-Growth Companies with
          </p>
          <div
            class="flex justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap"
          >
            <span class="text-xl font-bold text-zinc-400">Angular</span>
            <span class="text-xl font-bold text-zinc-400">Tailwind</span>
            <span class="text-xl font-bold text-zinc-400">Python</span>
            <span class="text-xl font-bold text-zinc-400">Next.js</span>
            <span class="text-xl font-bold text-zinc-400">Supabase</span>
            <span class="text-xl font-bold text-zinc-400">AWS</span>
          </div>
        </div>
      </section>

      <section class="py-24 sm:py-32 bg-white dark:bg-zinc-950">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center mb-16">
            <h2 class="text-base font-semibold leading-7 text-sky-500">Expertise</h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
            >
              Más que código, estrategia.
            </p>
          </div>

          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <div class="flex flex-col items-start">
              <div
                class="rounded-lg bg-zinc-100 dark:bg-zinc-800 p-2 ring-1 ring-zinc-900/10 dark:ring-white/10"
              >
                <svg
                  class="h-6 w-6 text-zinc-900 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 class="mt-4 text-lg font-bold text-zinc-900 dark:text-white">Web Development</h3>
              <p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                Sitios ultrarrápidos y aplicaciones complejas con arquitecturas escalables.
              </p>
            </div>
            <div class="flex flex-col items-start">
              <div
                class="rounded-lg bg-zinc-100 dark:bg-zinc-800 p-2 ring-1 ring-zinc-900/10 dark:ring-white/10"
              >
                <svg
                  class="h-6 w-6 text-zinc-900 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 class="mt-4 text-lg font-bold text-zinc-900 dark:text-white">Automation & AI</h3>
              <p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                Automatiza procesos repetitivos y venta con agentes de inteligencia artificial.
              </p>
            </div>
            <div class="flex flex-col items-start">
              <div
                class="rounded-lg bg-zinc-100 dark:bg-zinc-800 p-2 ring-1 ring-zinc-900/10 dark:ring-white/10"
              >
                <svg
                  class="h-6 w-6 text-zinc-900 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 class="mt-4 text-lg font-bold text-zinc-900 dark:text-white">SaaS Products</h3>
              <p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                Desarrollo de producto completo (MVP) listo para recibir inversión.
              </p>
            </div>
          </div>

          <div class="mt-16 flex justify-center">
            <a
              routerLink="/services"
              class="text-sm font-semibold leading-6 text-sky-500 hover:text-sky-400"
            >
              Ver todos los servicios <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section class="relative isolate overflow-hidden bg-zinc-900 py-16 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
          >
            <div class="max-w-xl lg:max-w-lg">
              <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                ¿Tienes una idea en mente?
              </h2>
              <p class="mt-4 text-lg leading-8 text-zinc-300">
                Deja de perder tiempo con soluciones lentas. Construyamos algo sólido, escalable y
                rápido.
              </p>
              <div class="mt-6 flex max-w-md gap-x-4">
                <a
                  routerLink="/contact"
                  class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Hablar con un Ingeniero
                </a>
              </div>
            </div>
            <div class="flex flex-col items-start justify-end lg:order-last">
              <div class="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 w-full">
                <div
                  class="h-32 bg-gradient-to-r from-sky-500 to-indigo-600 opacity-20 blur-2xl"
                ></div>
                <div class="p-6">
                  <div class="text-zinc-400 font-mono text-xs">
                    > Iniciando protocolo de contacto...<br />
                    > Análisis de requerimientos: OK<br />
                    > Disponibilidad: INMEDIATA<br />
                    <span class="animate-pulse text-sky-400">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class Home {
  public settings = inject(Settings);
}
