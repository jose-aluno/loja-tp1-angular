import { Component } from '@angular/core';
import { CardProduto } from "../card-produto/card-produto";
import { Produto } from '../../../model/produto';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {

  produtos: Produto[] = [
    {
    id: 1,
    nome: 'produto 1',
    descricao: 'produto 1',
    preco: 179,
    promo: true
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

}
