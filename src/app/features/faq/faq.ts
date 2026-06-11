import { Component, signal, inject } from '@angular/core';
import { Settings } from '../../core/state/settings';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
})
export class Faq {
  public settings = inject(Settings);
  openIndex = signal<number | null>(null);

  toggle(index: number) {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
