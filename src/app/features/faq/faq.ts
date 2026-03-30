import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
})
export class Faq {
  openIndex = signal<number | null>(null);

  toggle(index: number) {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
