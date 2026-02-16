import { Component } from '@angular/core';
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
