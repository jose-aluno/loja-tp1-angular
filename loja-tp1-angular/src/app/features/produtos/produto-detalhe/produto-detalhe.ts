import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../../../model/produto';
import { DescontoPipe } from '../../../shared/pipes/desconto-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produto-detalhe',
  imports: [DescontoPipe, CurrencyPipe],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private produtoService = inject(ProdutoService)

  loading = signal(true)
  produto = signal<Produto | null>(null)

  constructor(){
    this.route.paramMap.subscribe(pm => {
      const id = Number(pm.get('id'))
      if (isNaN(id)) {
        this.produto.set(null)
        this.loading.set(false)
        return
      }

      this.loading.set(true)
      this.produtoService.getById(id).subscribe(produto => {
        this.produto.set(produto)
        this.loading.set(false)
      })
    })
  }

  voltar(){
    this.router.navigate(['/produtos'])
  }
}
