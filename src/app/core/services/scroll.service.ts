import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {

  activeSection = signal<string>('home');

  sections: HTMLElement[] = [];

  registerSections(ids: string[]) {
    this.sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let current = 'home';

    this.sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 120) {
        current = section.id;
      }
    });

    this.activeSection.set(current);
  }
}
