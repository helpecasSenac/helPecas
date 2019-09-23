import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-edicao-produto',
  templateUrl: './edicao-produto.page.html',
  styleUrls: ['./edicao-produto.page.scss'],
})
export class EdicaoProdutoPage implements OnInit {

  estado: string;
  fabricante: number;
  modelo: string;
  nome: string;
  nr_serie: number;
  preco: number;

  id = null;
  produtos: {};

  constructor(    private route: ActivatedRoute, 
    private nav: NavController, 
    private produtoSer: ProdutosService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.produtoSer.getContato(this.id).subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);  
    });
    
  }
  }


