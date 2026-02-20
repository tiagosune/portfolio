import { Component } from '@angular/core';
import {ScrollService} from '../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme() {
    const html = document.documentElement;

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  }

  constructor(public scrollService: ScrollService) {}

}
