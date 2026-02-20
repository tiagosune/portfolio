import { Component } from '@angular/core';
import {Hero} from './sections/hero/hero';
import {About} from './sections/about/about';
import {Projects} from './sections/projects/projects';
import {Skills} from './sections/skills/skills';
import {AfterViewInit} from '@angular/core';
import {ScrollService} from '../../core/services/scroll.service';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Projects, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.registerSections([
      'home',
      'about',
      'projects',
      'skills',
      'contact'
    ]);
  }

}
