import { Component } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Banner } from './core/banner/banner';
import { Produto } from './model/produto';
import { CardProduto } from "./features/produtos/card-produto/card-produto";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, CardProduto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  produtos: Produto[] = [
    {
    id: 1,
    nome: 'produto 1',
    descricao: 'produto 1',
    preco: 179
    },
    {
    id: 2,
    nome: 'produto 1',
    descricao: 'produto 1',
    preco: 179
    },
    {
    id: 3,
    nome: 'produto 1',
    descricao: 'produto 1',
    preco: 179
    }
  ]

  sobre? : string

  receberSobre(texto: string) {
    this.sobre = texto
  }

}
