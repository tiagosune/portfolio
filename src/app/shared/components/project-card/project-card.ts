import {Component, Input} from '@angular/core';
import { Project } from '../../models/project.model';
import {RevealDirective} from '../../directives/reveal';

@Component({
  selector: 'app-project-card',
  imports: [RevealDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input({required: true}) project!: Project;

}
