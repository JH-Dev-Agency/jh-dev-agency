// src/app/features/contact/contact.ts
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- LEFT SIDE -->
        <div class="max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {{ settings.text().contact.title }}
          </h2>

          <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            {{ settings.text().contact.subtitle }}
          </p>

          <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Respondemos normalmente en menos de 24 horas.
          </p>

          <div class="mt-10 space-y-6 text-zinc-600 dark:text-zinc-400">
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">💬</div>
              <a
                href="https://wa.me/522464637426"
                target="_blank"
                class="text-sm font-medium hover:text-emerald-500 transition"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="bg-zinc-50/60 dark:bg-zinc-900/50 backdrop-blur-md p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
        >
          <div class="grid grid-cols-1 gap-y-6">
            <!-- NAME -->
            <div>
              <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Nombre Completo
              </label>

              <input
                type="text"
                formControlName="name"
                placeholder="Ej: Juan Pérez"
                class="w-full rounded-lg px-4 py-2.5 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
              />

              @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                <p class="text-xs text-red-500 mt-1">Este campo es obligatorio</p>
              }
            </div>

            <!-- EMAIL -->
            <div>
              <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Correo Electrónico
              </label>

              <input
                type="email"
                formControlName="email"
                placeholder="ejemplo@empresa.com"
                class="w-full rounded-lg px-4 py-2.5 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
              />

              @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                <p class="text-xs text-red-500 mt-1">Ingresa un correo válido</p>
              }
            </div>

            <!-- SELECTS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  Tipo de Proyecto
                </label>

                <select
                  formControlName="type"
                  class="w-full rounded-lg px-4 py-2.5 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                >
                  <option>Desarrollo Web</option>
                  <option>Automatización & IA</option>
                  <option>Producto SaaS</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  Presupuesto Estimado
                </label>

                <select
                  formControlName="budget"
                  class="w-full rounded-lg px-4 py-2.5 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                >
                  <option>$500 – $1,500 USD</option>
                  <option>$1,500 – $5,000 USD</option>
                  <option>$5,000+ USD</option>
                  <option>Por definir</option>
                </select>
              </div>
            </div>

            <!-- MESSAGE -->
            <div>
              <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Detalles del Proyecto
              </label>

              <textarea
                rows="4"
                formControlName="message"
                placeholder="Cuéntanos qué hace tu negocio, qué problema quieres resolver y cuándo te gustaría lanzar."
                class="w-full rounded-lg px-4 py-3 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition resize-none"
              ></textarea>

              @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                <p class="text-xs text-red-500 mt-1">Describe brevemente tu proyecto</p>
              }
            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              [disabled]="contactForm.invalid || isSending()"
              class="flex items-center justify-center gap-2 w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-sky-500 transition disabled:opacity-50"
            >
              @if (isSending()) {
                <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                    fill="none"
                  ></circle>
                </svg>

                Enviando...
              } @else {
                Solicitar llamada de 30 min →
              }
            </button>

            <p class="text-xs text-zinc-500 mt-3 text-center">
              Te responderemos en menos de 24 horas.
            </p>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class Contact {
  public settings = inject(Settings);
  private fb = inject(FormBuilder);
  showSuccess = signal(false);

  isSending = signal(false);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    type: ['Desarrollo Web'],
    budget: ['$500 – $1,500 USD'],
    message: ['', Validators.required],
    company: [''],
  });

  async onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSending.set(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.contactForm.value),
      });

      if (!res.ok) throw new Error();

      this.showSuccess.set(true);

      this.contactForm.reset({
        type: 'Desarrollo Web',
        budget: '< $1,000 USD',
      });

      setTimeout(() => this.showSuccess.set(false), 5000);
    } catch (error) {
      console.error(error);

      alert('Error sending message');
    } finally {
      this.isSending.set(false);
    }
  }
}
