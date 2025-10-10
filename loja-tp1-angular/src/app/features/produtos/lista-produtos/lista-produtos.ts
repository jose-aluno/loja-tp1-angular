import { Component, computed, signal, inject } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);
  private produtos = toSignal<Produto[],Produto[]>(this.produtoService.listar(),{initialValue:[]})
  private router = inject(Router)

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos().filter(p => p.promo) : this.produtos());

  alternarPromo(){
    this.apenasPromo.update(p=>!p);
  }
  onAddProduct(produto:{id:number, quantity:number}){
    alert(`Produto: ${produto.id}, Quantidade: ${produto.quantity}`);
  }

  onViewProduct(id:number){
    this.router.navigate(['/produtos', id])
  }
}