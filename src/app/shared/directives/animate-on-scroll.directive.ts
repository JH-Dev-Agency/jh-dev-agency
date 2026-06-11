import { Directive, ElementRef, inject, Input, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  
  @Input() animateClass = 'translate-y-0 opacity-100';
  @Input() initialClass = 'translate-y-8 opacity-0';
  @Input() delay = '0ms';

  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Set initial styles
      this.el.nativeElement.classList.add('transition-all', 'duration-1000', 'ease-out');
      if (this.delay !== '0ms') {
        this.el.nativeElement.style.transitionDelay = this.delay;
      }
      
      const initials = this.initialClass.split(' ').filter(Boolean);
      this.el.nativeElement.classList.add(...initials);

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.remove(...initials);
            this.el.nativeElement.classList.add(...this.animateClass.split(' ').filter(Boolean));
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
