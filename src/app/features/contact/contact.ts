import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section
      class="relative isolate bg-white dark:bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8 transition-colors duration-300 overflow-hidden"
    >
      <div
        class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>

      <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">
        <div class="max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {{ settings.text().contact.title }}
          </h2>
          <p class="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {{ settings.text().contact.subtitle }}
          </p>
          @if (settings.text().contact.subtitle_extra) {
            <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
              {{ settings.text().contact.subtitle_extra }}
            </p>
          }

          <dl class="mt-10 space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <div class="flex gap-x-4 items-center">
              <dt class="flex-none">
                <span class="sr-only">{{ settings.text().contact.info.email_label }}</span>
                <div
                  class="h-10 w-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
              </dt>
              <dd>
                <p class="font-medium text-zinc-900 dark:text-white">{{ settings.text().contact.info.email_label }}</p>
                <a
                  class="hover:text-sky-500 transition-colors text-zinc-600 dark:text-zinc-400"
                  href="mailto:contact@jhdev.studio"
                  >contact&#64;jhdev.studio</a
                >
              </dd>
            </div>

            <div class="flex gap-x-4 items-center">
              <dt class="flex-none">
                <span class="sr-only">{{ settings.text().contact.info.location_label }}</span>
                <div
                  class="h-10 w-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </dt>
              <dd>
                <p class="font-medium text-zinc-900 dark:text-white">{{ settings.text().contact.info.location_label }}</p>
                <p class="text-zinc-600 dark:text-zinc-400">{{ settings.text().contact.info.location }}</p>
              </dd>
            </div>

            <div class="flex gap-x-4 items-start">
              <dt class="flex-none">
                <span class="sr-only">{{ settings.text().contact.info.availability_label }}</span>
                <div
                  class="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 relative"
                >
                  <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    ></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </dt>
              <dd>
                <p class="font-medium text-zinc-900 dark:text-white">{{ settings.text().contact.info.availability_label }}</p>
                <p class="text-zinc-600 dark:text-zinc-400">{{ settings.text().contact.info.availability }}</p>
              </dd>
            </div>
          </dl>
          @if (settings.text().contact.info.scope_global) {
            <p class="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
              {{ settings.text().contact.info.scope_global }}
            </p>
          }
        </div>

        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-900/5 relative"
        >
          <div
            class="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-gradient-to-br from-sky-500 to-indigo-600 opacity-10 blur-2xl rounded-full pointer-events-none"
          ></div>

          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 relative z-10">
            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.name
              }}</label>
              <div class="mt-2.5">
                <input
                  type="text"
                  formControlName="name"
                  class="block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
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
                  formControlName="email"
                  class="block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.type
              }}</label>
              <div class="mt-2.5">
                <select
                  formControlName="type"
                  class="custom-select block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                >
                  <option>Desarrollo Web</option>
                  <option>Automatización & IA</option>
                  <option>Producto SaaS (MVP)</option>
                  <option>App Móvil</option>
                  <option>Otro</option>
                </select>
              </div>
              @if (settings.text().contact.form.type_help) {
                <p class="mt-1.5 text-xs text-zinc-500 dark:text-zinc-500">{{ settings.text().contact.form.type_help }}</p>
              }
            </div>

            <div>
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.budget
              }}</label>
              <div class="mt-2.5">
                <select
                  formControlName="budget"
                  class="custom-select block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                >
                  <option>< $1,000 USD</option>
                  <option>$1k - $5k USD</option>
                  <option>$5k - $10k USD</option>
                  <option>> $10k USD</option>
                  <option>Por definir</option>
                </select>
              </div>
              @if (settings.text().contact.form.budget_help) {
                <p class="mt-1.5 text-xs text-zinc-500 dark:text-zinc-500">{{ settings.text().contact.form.budget_help }}</p>
              }
            </div>

            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-zinc-900 dark:text-white">{{
                settings.text().contact.form.message
              }}</label>
              <div class="mt-2.5">
                <textarea
                  rows="4"
                  formControlName="message"
                  [attr.placeholder]="settings.text().contact.form.message_placeholder || null"
                  class="block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="mt-8 relative z-10">
            <button
              type="submit"
              [disabled]="contactForm.invalid"
              class="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {{ settings.text().contact.form.btn }}
              <span
                aria-hidden="true"
                class="inline-block transition-transform group-hover:translate-x-1 ml-1"
                >→</span
              >
            </button>
            @if (settings.text().contact.form.after_submit) {
              <p class="mt-3 text-sm text-zinc-500 dark:text-zinc-500 text-center">
                {{ settings.text().contact.form.after_submit }}
              </p>
            }
          </div>
        </form>
      </div>
    </section>
  `,
  // Solo dejamos CSS puro para la flechita del Select, SIN @apply
  styles: [
    `
      .custom-select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5em 1.5em;
        padding-right: 2.5rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .dark .custom-select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      }
    `,
  ],
})
export class Contact {
  public settings = inject(Settings);
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    type: ['Desarrollo Web'],
    budget: ['< $1,000 USD'],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.contactForm.valid) {
      alert('¡Mensaje enviado (Simulación)!');
      this.contactForm.reset({
        type: 'Desarrollo Web',
        budget: '< $1,000 USD',
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
