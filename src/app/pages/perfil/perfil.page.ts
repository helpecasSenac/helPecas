import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  CNPJ: string;
  end: number;
  nomeFant: string;
  razaoSoc: string;
  tel: string;
  
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
          razaoSoc: e.payload.doc.data()['razaoSoc'],
          tel: e.payload.doc.data()['tel'],
        };
      })
      console.log(this.fornecedores);
        });
  }
  
}
