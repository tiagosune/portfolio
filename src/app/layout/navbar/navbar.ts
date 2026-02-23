import {Component, ElementRef, HostListener} from '@angular/core';
import {ScrollService} from '../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(public scrollService: ScrollService, private elementRef: ElementRef) {
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document: click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.menuOpen) return;
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.menuOpen = false;
    }
  }

}

