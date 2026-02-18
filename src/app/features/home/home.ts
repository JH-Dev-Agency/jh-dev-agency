import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
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
              {{ settings.text().home.hero.badge }}
              <span class="font-semibold text-sky-600 dark:text-sky-400">High Performance</span>
            </div>
          </div>
          <h1 class="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
            {{ settings.text().home.hero.title_prefix }}
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 block sm:inline"
            >
              {{ settings.text().home.hero.title_gradient }}
            </span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            {{ settings.text().home.hero.subtitle }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              routerLink="/contact"
              class="rounded-md bg-zinc-900 dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:opacity-90 transition-all"
            >
              {{ settings.text().home.hero.cta_primary }}
            </a>
            <a
              routerLink="/portfolio"
              class="text-sm font-semibold leading-6 text-zinc-900 dark:text-white group"
            >
              {{ settings.text().home.hero.cta_secondary }}
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
            class="flex justify-center items-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div
              class="group flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <svg
                class="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 5.5L3.5 19L12 22L20.5 19L22 5.5L12 2Z" fill="#DD0031" />
                <path d="M12 2L2 5.5L3.5 19L12 22V2Z" fill="#C3002F" />
                <path d="M12 4.5V17H12.2L15.5 11.5H8.5L12 4.5Z" fill="#FFFFFF" />
              </svg>
              <span
                class="text-xs font-semibold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                >Angular</span
              >
            </div>

            <div
              class="group flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <svg
                class="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0002 6C12.0002 2.68629 14.6865 0 18.0002 0C19.6571 0 21.1571 0.671573 22.2429 1.75736C23.3287 2.84315 24.0002 4.34315 24.0002 6C24.0002 9.31371 21.3139 12 18.0002 12C16.3434 12 14.8434 11.3284 13.7576 10.2426C12.6718 9.15685 12.0002 7.65685 12.0002 6ZM6.00024 12C6.00024 8.68629 8.68653 6 12.0002 6C13.6571 6 15.1571 6.67157 16.2429 7.75736C17.3287 8.84315 18.0002 10.3431 18.0002 12C18.0002 15.3137 15.3139 18 12.0002 18C10.3434 18 8.84339 17.3284 7.7576 16.2426C6.67182 15.1569 6.00024 13.6569 6.00024 12ZM0.000244141 18C0.000244141 14.6863 2.68653 12 6.00024 12C7.6571 12 9.1571 12.6716 10.2429 13.7574C11.3287 14.8431 12.0002 16.3431 12.0002 18C12.0002 21.3137 9.31395 24 6.00024 24C4.34339 24 2.84339 23.3284 1.7576 22.2426C0.671816 21.1569 0.000244141 19.6569 0.000244141 18Z"
                  fill="#38BDF8"
                />
              </svg>
              <span
                class="text-xs font-semibold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                >Tailwind</span
              >
            </div>

            <div
              class="group flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <svg
                class="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.8125C6.46875 0.8125 6.09375 3.28125 6.09375 3.28125L6.10938 6.5625H12.1875V7.40625H3.65625C0.84375 7.40625 0.84375 10.2188 0.84375 10.2188V13.875C0.84375 16.5938 3.5625 16.3125 3.5625 16.3125H5.4375V14.1562C5.4375 11.5312 8.34375 11.3438 8.34375 11.3438H13.5938C15.9375 11.3438 15.8438 9.375 15.8438 9.375V3.375C15.8438 1.125 13.5938 0.84375 13.5938 0.84375H12V0.8125ZM9.65625 1.96875C10.125 1.96875 10.5 2.34375 10.5 2.8125C10.5 3.28125 10.125 3.65625 9.65625 3.65625C9.1875 3.65625 8.8125 3.28125 8.8125 2.8125C8.8125 2.34375 9.1875 1.96875 9.65625 1.96875ZM18.0938 7.40625V9.84375C18.0938 12.4688 15.1875 12.6562 15.1875 12.6562H9.9375C7.59375 12.6562 7.6875 14.625 7.6875 14.625V20.625C7.6875 22.875 9.9375 23.1562 9.9375 23.1562H11.5312C17.0625 23.1562 17.4375 20.6875 17.4375 20.6875L17.4219 17.4375H11.3438V16.5938H19.875C22.6875 16.5938 22.6875 13.7812 22.6875 13.7812V10.125C22.6875 7.40625 19.9688 7.6875 19.9688 7.6875H18.0938V7.40625ZM13.875 20.3438C14.3438 20.3438 14.7188 20.7188 14.7188 21.1875C14.7188 21.6562 14.3438 22.0312 13.875 22.0312C13.4062 22.0312 13.0312 21.6562 13.0312 21.1875C13.0312 20.7188 13.4062 20.3438 13.875 20.3438Z"
                  fill="#3776AB"
                />
              </svg>
              <span
                class="text-xs font-semibold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                >Python</span
              >
            </div>

            <div
              class="group flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <svg
                class="h-10 w-10 text-[#092E20] dark:text-[#44B78B]"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 3C14.82 3 16.5 4.68 16.5 6.75V12.75H15V6.75C15 5.51 14 4.5 12.75 4.5C11.5 4.5 10.5 5.51 10.5 6.75V17.25H9V3H12.75ZM6 10.5H7.5V17.25H6V10.5ZM17.25 10.5H18.75V17.25H17.25V10.5Z"
                />
              </svg>
              <span
                class="text-xs font-semibold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                >Django</span
              >
            </div>

            <div
              class="group flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <svg
                class="h-10 w-10 text-[#00758F] dark:text-[#4479A1]"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.5 16.5C17.5 16.5 15.5 18 12 18C8.5 18 6.5 16.5 6.5 16.5V15H17.5V16.5ZM17.5 13.5H6.5V12H17.5V13.5ZM17.5 10.5H6.5V9H17.5V10.5Z"
                />
              </svg>
              <span
                class="text-xs font-semibold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                >MySQL</span
              >
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 sm:py-32 bg-white dark:bg-zinc-950">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center mb-16">
            <h2 class="text-base font-semibold leading-7 text-sky-500 uppercase tracking-widest">
              {{ settings.text().home.expertise.label }}
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
            >
              {{ settings.text().home.expertise.title }}
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
              <h3 class="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
                {{ settings.text().home.expertise.cards[0].title }}
              </h3>
              <p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                {{ settings.text().home.expertise.cards[0].desc }}
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
              <h3 class="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
                {{ settings.text().home.expertise.cards[1].title }}
              </h3>
              <p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                {{ settings.text().home.expertise.cards[1].desc }}
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
              <h3 class="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
                {{ settings.text().home.expertise.cards[2].title }}
              </h3>
              <p class="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                {{ settings.text().home.expertise.cards[2].desc }}
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
                {{ settings.text().home.cta_banner.title }}
              </h2>
              <p class="mt-4 text-lg leading-8 text-zinc-300">
                {{ settings.text().home.cta_banner.desc }}
              </p>
              <div class="mt-6 flex max-w-md gap-x-4">
                <a
                  routerLink="/contact"
                  class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {{ settings.text().home.cta_banner.btn }}
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
