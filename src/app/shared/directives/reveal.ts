import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {

  @Input('appReveal') direction: 'left' | 'right' | 'up' = 'up';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement;

    const baseClasses = [
      'opacity-0',
      'transition-all',
      'duration-700',
      'ease-out'
    ];

    const directionClass =
      this.direction === 'left'
        ? '-translate-x-12'
        : this.direction === 'right'
          ? 'translate-x-12'
          : 'translate-y-12';

    element.classList.add(...baseClasses, directionClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove(directionClass, 'opacity-0');
          element.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
  }
}
