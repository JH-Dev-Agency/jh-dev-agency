import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Settings } from '../../core/state/settings';
import { SeoService } from '../../core/seo/seoService';
import { ContactStatus } from '../../core/models';
import DOMPurify from 'dompurify';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">

        <!-- LEFT SIDE -->
        <div class="max-w-lg">
          <h1 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {{ settings.text().contact.title }}
          </h1>

          <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            {{ settings.text().contact.subtitle }}
          </p>

          <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {{ settings.text().contact.subtitle_extra }}
          </p>

          <div class="mt-10 space-y-6 text-zinc-600 dark:text-zinc-400">
            <!-- Email -->
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-sky-500/10 text-sky-500">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  {{ settings.text().contact.info.email_label }}
                </p>
                <a href="mailto:contact@jhdevagency.com"
                  class="text-sm font-medium hover:text-sky-500 transition">
                  contact&#64;jhdevagency.com
                </a>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">WhatsApp</p>
                <a href="https://wa.me/522464637426" target="_blank" rel="noopener noreferrer"
                  class="text-sm font-medium hover:text-emerald-500 transition">
                  {{ settings.text().whatsappTooltip }}
                </a>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-zinc-500/10 text-zinc-500">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  {{ settings.text().contact.info.location_label }}
                </p>
                <p class="text-sm">{{ settings.text().contact.info.location }}</p>
              </div>
            </div>

            <!-- Availability badge -->
            <div class="flex items-center gap-2 mt-6">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span class="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {{ settings.text().contact.info.availability }}
              </span>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div>
          @if (status() === 'success') {
            <div class="flex flex-col items-center justify-center text-center p-10 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl h-full min-h-[420px]">
              <div class="rounded-full bg-emerald-100 dark:bg-emerald-800 p-4 mb-6">
                <svg class="h-10 w-10 text-emerald-600 dark:text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">{{ settings.text().contact.form.success_title }}</h3>
              <p class="text-zinc-600 dark:text-zinc-400 mb-6">
                {{ settings.text().contact.form.success_desc }}
              </p>
              <button
                (click)="resetForm()"
                class="rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                {{ settings.text().contact.form.btn_another }}
              </button>
            </div>
          } @else {
            <form
              [formGroup]="contactForm"
              (ngSubmit)="onSubmit()"
              class="bg-zinc-50/60 dark:bg-zinc-900/50 backdrop-blur-md p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
            >
              @if (status() === 'error') {
                <div class="mb-6 flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <svg class="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <p class="text-sm text-red-700 dark:text-red-300">
                    {{ settings.text().contact.form.error_msg }}
                  </p>
                </div>
              }

              <div class="grid grid-cols-1 gap-y-6">
                <!-- NAME -->
                <div>
                  <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    {{ settings.text().contact.form.name }}
                  </label>
                  <input
                    type="text"
                    formControlName="name"
                    placeholder="Ej: Juan Pérez"
                    class="w-full rounded-lg px-4 py-2.5 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                  />
                  @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                    <p class="text-xs text-red-500 mt-1">{{ settings.text().contact.form.req_name }}</p>
                  }
                </div>

                <!-- EMAIL -->
                <div>
                  <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    {{ settings.text().contact.form.email }}
                  </label>
                  <input
                    type="email"
                    formControlName="email"
                    placeholder="ejemplo@empresa.com"
                    class="w-full rounded-lg px-4 py-2.5 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                  />
                  @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                    <p class="text-xs text-red-500 mt-1">{{ settings.text().contact.form.req_email }}</p>
                  }
                </div>

                <!-- SELECTS -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                      {{ settings.text().contact.form.type }}
                    </label>
                    <select
                      formControlName="type"
                      class="w-full rounded-lg px-4 py-2.5 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition"
                    >
                      <option>Desarrollo Web</option>
                      <option>Automatización & IA</option>
                      <option>Producto SaaS</option>
                      <option>Infraestructura & Cloud</option>
                      <option>Otro</option>
                    </select>
                    <p class="text-xs text-zinc-400 mt-1">{{ settings.text().contact.form.type_help }}</p>
                  </div>

                  <div>
                    <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                      {{ settings.text().contact.form.budget }}
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
                    <p class="text-xs text-zinc-400 mt-1">{{ settings.text().contact.form.budget_help }}</p>
                  </div>
                </div>

                <!-- MESSAGE -->
                <div>
                  <label class="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    {{ settings.text().contact.form.message }}
                  </label>
                  <textarea
                    rows="4"
                    formControlName="message"
                    [placeholder]="settings.text().contact.form.message_placeholder"
                    class="w-full rounded-lg px-4 py-3 bg-white/70 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-sky-500 outline-none transition resize-none"
                  ></textarea>
                  @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                    <p class="text-xs text-red-500 mt-1">{{ settings.text().contact.form.req_message }}</p>
                  }
                </div>

                <!-- Honeypot anti-spam (hidden) -->
                <div class="hidden" aria-hidden="true">
                  <input type="text" formControlName="company" tabindex="-1" autocomplete="off" />
                </div>

                <!-- BUTTON -->
                <button
                  type="submit"
                  [disabled]="contactForm.invalid || status() === 'sending'"
                  class="flex items-center justify-center gap-2 w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-sky-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  @if (status() === 'sending') {
                    <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.4" stroke-dashoffset="10" stroke-linecap="round" />
                    </svg>
                    {{ settings.text().contact.form.process }}
                  } @else {
                    {{ settings.text().contact.form.send_whatsapp }}
                  }
                </button>

                <p class="text-xs text-zinc-500 text-center">
                  {{ settings.text().contact.form.redirecting }}
                </p>
              </div>
            </form>
          }
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  public settings = inject(Settings);
  private seo = inject(SeoService);
  private fb = inject(FormBuilder);

  status = signal<ContactStatus>('idle');

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    type: ['Desarrollo Web'],
    budget: ['$500 – $1,500 USD'],
    message: ['', [Validators.required, Validators.minLength(20)]],
    company: [''], // honeypot anti-spam
  });

  constructor() {
    this.seo.updateSeo({
      title: 'Contacto | JH Dev Agency',
      description:
        'Agenda una llamada de 30 minutos. Cuéntanos tu proyecto y te respondemos en menos de 24 horas.',
      url: 'https://jhdevagency.com/contact',
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // Honeypot check — if company field has value, it's a bot
    if (this.contactForm.value.company) return;

    this.status.set('sending');

    try {
      const { name, email, type, budget, message } = this.contactForm.value;

      // Sanitizar los datos con DOMPurify para prevenir XSS
      const safeName = DOMPurify.sanitize(name);
      const safeEmail = DOMPurify.sanitize(email);
      const safeType = DOMPurify.sanitize(type);
      const safeBudget = DOMPurify.sanitize(budget);
      const safeMessage = DOMPurify.sanitize(message);

      // Construir el mensaje formateado para WhatsApp
      const waText = '*Nuevo Contacto Web*\n*Nombre:* ' + safeName + '\n*Email:* ' + safeEmail + '\n*Interés:* ' + safeType + '\n*Presupuesto:* ' + safeBudget + '\n\n*Mensaje:*\n' + safeMessage;

      // Número destino (formato internacional sin el +)
      const waNumber = '522464637426';
      
      // Crear la URL y redirigir
      const waUrl = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(waText);
      
      // Pequeño timeout para simular la carga y que el usuario vea que reacciona
      setTimeout(() => {
        window.open(waUrl, '_blank');
        this.status.set('success');
        this.contactForm.reset({ type: 'Desarrollo Web', budget: '$500 – $1,500 USD' });
      }, 600);

    } catch (error) {
      console.error('[Contact] form submit error:', error);
      this.status.set('error');
    }
  }

  resetForm(): void {
    this.status.set('idle');
    this.contactForm.reset({ type: 'Desarrollo Web', budget: '$500 – $1,500 USD' });
  }
}
