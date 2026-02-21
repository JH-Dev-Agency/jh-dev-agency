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
    </section>
  `,
  // Añadimos una animación simple en los estilos
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
      /* ... tus otros estilos del select ... */
    `,
  ],
})
export class Contact {
  public settings = inject(Settings);
  private fb = inject(FormBuilder);

  isSending = signal(false);
  showSuccess = signal(false); // <--- Nueva señal para el Toast

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

      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        type: this.contactForm.value.type,
        budget: this.contactForm.value.budget,
        message: this.contactForm.value.message,
        time: new Date().toLocaleString(),
      };

      try {
        await emailjs.send(
          'service_cw0hn44',
          'template_moew8ua',
          templateParams,
          'g0x3v-UoKpZm7OTjm',
        );

        // Feedback visual en lugar del alert
        this.showSuccess.set(true);
        this.contactForm.reset({ type: 'Desarrollo Web', budget: '< $1,000 USD' });

        // Ocultar el toast automáticamente después de 5 segundos
        setTimeout(() => this.showSuccess.set(false), 5000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        alert('Error al enviar. Intenta de nuevo.');
      } finally {
        this.isSending.set(false);
      }
    }
  }
}
