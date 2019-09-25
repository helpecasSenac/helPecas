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

  removerRegistro(rowID) {
    console.log(rowID);
    this.produtoSer.excluir(rowID);
  }
  
  editarRegistro(record) {
  
    record.isEdit = true;
    record.EditNome = record.nome;
    record.EditIdade = record.idade;
    record.EditCidade = record.cidade;
    record.EditEmail = record.email;
  
  }
  
  atualizarRegistro(recordRow) {
    let record = {};
    record['nome'] = recordRow.EditNome;
    record['idade'] = recordRow.EditIdade;
    record['cidade'] = recordRow.EditCidade;
    record['email'] = recordRow.EditEmail;
    this.produtoSer.alterar(recordRow.id, record);
    recordRow.isEdit = false;
  }
}


