import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.scss'],
})
export class FornecedoresPage implements OnInit {
  CNPJ: string;
  end: number;
  nomeFant: string;
  pass: string;
  razaoSoc: string;
  tel: string;
  user: string;
  
  fornecedores:any;

  constructor(private CliSer: ClientesService) { }

  ngOnInit() {
    this.CliSer.listar().subscribe(data => {
      this.fornecedores = data.map(e => {
        return{
          id: e.payload.doc.id,
          isEdit: false,
          CNPJ: e.payload.doc.data()['CNPJ'],
          end: e.payload.doc.data()['end'],
          nomeFant: e.payload.doc.data()['nomeFant'],
          pass: e.payload.doc.data()['pass'],
          razaoSoc: e.payload.doc.data()['razaoSoc'],
          tel: e.payload.doc.data()['tel'],
          user: e.payload.doc.data()['user'],
      
      };
      })
      console.log(this.fornecedores);
        });
  }

}
