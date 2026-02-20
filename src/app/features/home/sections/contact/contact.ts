import {Component, signal} from '@angular/core';
import {RevealDirective} from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  email = 'tiagosune1@hotmail.com';
  copied = signal(false);

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied.set(true);

      setTimeout(() => {
        this.copied.set(false);
      }, 2000);

    } catch (err) {
      console.error('Erro ao copiar email', err);
    }
  }

}
