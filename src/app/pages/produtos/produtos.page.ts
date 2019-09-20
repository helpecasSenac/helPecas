import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit, NgModule } from '@angular/core';

import { SearchPipe } from '../../pipes/search/search';
import { SortPipe } from '../../pipes/sort/sort';

@NgModule({})
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  estado: string;
  fabricante: number;
  modelo: string;
  nome: string;
  nr_serie: number;
  preco: number;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  terms: any;
  
  produto:any;

  constructor(private ProSer: ProdutosService, private search: SearchPipe) { }

  ngOnInit() {
    this.ProSer.listar().subscribe(data => {
      this.produto = data.map(e => {
        return{
          id: e.payload.doc.id,
          isEdit: false,
          estado: e.payload.doc.data()['estado'],
          fabricante: e.payload.doc.data()['fabricante'],
          modelo: e.payload.doc.data()['modelo'],
          nome: e.payload.doc.data()['nome'],
          nr_serie: e.payload.doc.data()['nr_serie'],
          preco: e.payload.doc.data()['prPipeeco'],
      
      };
      })
      console.log(this.produto);
      });
      
      //BUSCA

  }
  
  //BUSCA
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  /* 
  removerRegistro(rowID) {
    console.log(rowID);
    this.pessoaSer.excluir(rowID);
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
    this.pessoaSer.alterar(recordRow.id, record);
    recordRow.isEdit = false;
  }
    criarRegistro(){
  
      let record = {};
      record['nome'] = this.nome;
      record['idade'] = this.idade;
      record['cidade'] = this.cidade;
      record['email'] = this.email;
  
      this.pessoaSer.criar(record).then(resp => {
      this.nome = "";
      this.idade = undefined;
      this.cidade = "";
      this.email = "";
      console.log(resp);
      })
      .catch(error =>{
        console.log(error);
  
      });
    
    }
    */
}
