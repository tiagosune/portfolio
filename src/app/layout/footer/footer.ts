import { Component } from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal';

@Component({
  selector: 'app-footer',
  imports: [
    RevealDirective
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
