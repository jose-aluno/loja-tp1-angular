import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  title = input.required<string>()
  nome = 'Socorro';

  textoSobre = output<string>()

  enviarSobre() {
    this.textoSobre.emit("Técnicas de Programação I. Desenvolvido por José")
  }
  /*
  exibirSobre() : void {
    alert(`Ebaaaaaaaaaa ${this.nome}`)
  } */
}
