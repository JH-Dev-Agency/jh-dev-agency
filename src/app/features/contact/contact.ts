import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative isolate bg-white dark:bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8 transition-colors duration-300"
    >
      <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
        <div class="max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {{ settings.text().contact.title }}
          </h2>
          <p class="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {{ settings.text().contact.subtitle }}
          </p>

          <dl class="mt-10 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-7 w-6 text-zinc-400"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </dt>
              <dd>
                <a class="hover:text-sky-500 transition-colors" href="mailto:contact@jhdev.studio"
                  >contact&#64;jhdev.studio</a
                >
              </dd>
            </div>

            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-7 w-6 text-zinc-400"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </dt>
              <dd>{{ settings.text().contact.info.location }}</dd>
            </div>

            <div class="mt-8 border-l-2 border-sky-500 pl-4">
              <p class="font-semibold text-zinc-900 dark:text-white">
                {{ settings.text().contact.info.availability }}
              </p>
            </div>
          </dl>
        </div>

        <form
          class="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-900/5"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.name
              }}</label>
              <div class="mt-2.5">
                <input
                  type="text"
                  class="block w-full rounded-md border-0 bg-white/50 dark:bg-zinc-800/50 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.email
              }}</label>
              <div class="mt-2.5">
                <input
                  type="email"
                  class="block w-full rounded-md border-0 bg-white/50 dark:bg-zinc-800/50 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.type
              }}</label>
              <div class="mt-2.5">
                <select
                  class="block w-full rounded-md border-0 bg-white/50 dark:bg-zinc-800/50 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                >
                  <option>Web Development</option>
                  <option>Automation & IA</option>
                  <option>SaaS Product</option>
                  <option>Mobile App</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.budget
              }}</label>
              <div class="mt-2.5">
                <select
                  class="block w-full rounded-md border-0 bg-white/50 dark:bg-zinc-800/50 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                >
                  <option>< $1,000 USD</option>
                  <option>$1k - $5k USD</option>
                  <option>$5k - $10k USD</option>
                  <option>> $10k USD</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.message
              }}</label>
              <div class="mt-2.5">
                <textarea
                  rows="4"
                  class="block w-full rounded-md border-0 bg-white/50 dark:bg-zinc-800/50 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <button
              type="submit"
              class="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all hover:scale-[1.02]"
            >
              {{ settings.text().contact.form.btn }}
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class Contact {
  public settings = inject(Settings);
}
