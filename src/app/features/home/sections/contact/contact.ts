import { Component } from '@angular/core';
import {RevealDirective} from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-contact',
  imports: [
    RevealDirective
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
