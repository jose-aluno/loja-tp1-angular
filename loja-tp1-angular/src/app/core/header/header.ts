import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  title = input.required<string>();
  nome = 'Socorro';

  exibirSobre() : void {
    alert(`Ebaaaaaaaaaa ${this.nome}`);
  }
}
