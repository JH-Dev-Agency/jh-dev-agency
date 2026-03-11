// src/app/features/contact/contact.ts
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Settings } from '../../core/state/settings';
import emailjs from '@emailjs/browser';

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

      @if (showSuccess()) {
        <div
          class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div
            class="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-zinc-800 dark:border-zinc-200"
          >
            <div class="bg-emerald-500 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <span class="font-medium">¡Mensaje enviado con éxito, José Horacio!</span>
          </div>
        </div>
      }

      <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">
        <div class="max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {{ settings.text().contact.title }}
          </h2>
          <p class="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {{ settings.text().contact.subtitle }}
          </p>

          <dl class="mt-10 space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <div class="flex gap-x-4 items-center">
              <dt
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
              </dt>
              <dd>
                <p class="font-medium text-zinc-900 dark:text-white">
                  {{ settings.text().contact.info.email_label }}
                </p>
                <a
                  class="hover:text-sky-500 transition-colors"
                  href="mailto:contact&#64;jhdev.studio"
                  >contact&#64;jhdev.studio</a
                >
              </dd>
            </div>
          </dl>
        </div>

        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative"
        >
          <div class="grid grid-cols-1 gap-y-6 relative z-10">
            <div>
              <label class="block text-sm font-semibold text-zinc-900 dark:text-white">{{
                settings.text().contact.form.name
              }}</label>
              <input
                type="text"
                formControlName="name"
                class="block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-sky-600 sm:text-sm"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-zinc-900 dark:text-white">{{
                settings.text().contact.form.email
              }}</label>
              <input
                type="email"
                formControlName="email"
                class="block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-sky-600 sm:text-sm"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-zinc-900 dark:text-white">{{
                  settings.text().contact.form.type
                }}</label>
                <select
                  formControlName="type"
                  class="block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-sky-600 sm:text-sm"
                >
                  <option>Desarrollo Web</option>
                  <option>Automatización & IA</option>
                  <option>Producto SaaS (MVP)</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-zinc-900 dark:text-white">{{
                  settings.text().contact.form.budget
                }}</label>
                <select
                  formControlName="budget"
                  class="block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-sky-600 sm:text-sm"
                >
                  <option>< $1,000 USD</option>
                  <option>$1k - $5k USD</option>
                  <option>Por definir</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-zinc-900 dark:text-white">{{
                settings.text().contact.form.message
              }}</label>
              <textarea
                rows="4"
                formControlName="message"
                class="block w-full rounded-md border-0 bg-white/70 dark:bg-zinc-800/70 px-3.5 py-2 text-zinc-900 dark:text-white ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 focus:ring-2 focus:ring-sky-600 sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              [disabled]="contactForm.invalid || isSending()"
              class="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 disabled:opacity-50 transition-all"
            >
              {{ isSending() ? 'Enviando...' : settings.text().contact.form.btn }}
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes in {
        from {
          opacity: 0;
          transform: translate(-50%, 1rem);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
      .animate-in {
        animation: in 0.3s ease-out;
      }
    `,
  ],
})
export class Contact {
  public settings = inject(Settings);
  private fb = inject(FormBuilder);

  isSending = signal(false);
  showSuccess = signal(false);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    type: ['Desarrollo Web'],
    budget: ['< $1,000 USD'],
    message: ['', Validators.required],
  });

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSending.set(true);
      const templateParams = { ...this.contactForm.value, time: new Date().toLocaleString() };

      try {
        await emailjs.send(
          'service_cw0hn44',
          'template_06zvdt9',
          templateParams,
          'g0x3v-UoKpZm7OTjm',
        );
        this.showSuccess.set(true);
        this.contactForm.reset({ type: 'Desarrollo Web', budget: '< $1,000 USD' });
        setTimeout(() => this.showSuccess.set(false), 5000);
      } catch (error) {
        console.error('EmailJS Error:', error);
      } finally {
        this.isSending.set(false);
      }
    }
  }
}
