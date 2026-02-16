import { Component } from '@angular/core';
import {Hero} from './sections/hero/hero';
import {About} from './sections/about/about';
import {Projects} from './sections/projects/projects';
import {Skills} from './sections/skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Projects, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
