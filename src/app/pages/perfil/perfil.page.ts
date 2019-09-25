import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

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

  constructor(private CliSer: ClientesService,
    private afa: AngularFireAuth, 
    public firestore: AngularFirestore) { }
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

  removerRegistro(rowID) {
    console.log(rowID);
    this.CliSer.excluir(rowID);
  }
  
  editarRegistro(record) {
  
    record.isEdit = true;
    record.EditCNPJ = record.CNPJ;
    record.EditEnd = record.end;
    record.EditNomeFant = record.nomeFant;
    record.EditRazaoSoc = record.razaoSoc;
    record.EditTel = record.tel;
  
  }
  
  atualizarRegistro(recordRow) {
    let record = {};
    record['nomeFant'] = recordRow.EditNomeFant;
    record['CNPJ'] = recordRow.EditCNPJ;
    record['end'] = recordRow.EditNomeFant;
    record['razaoSoc'] = recordRow.EditRazaoSoc;
    record['tel'] = recordRow.EditTel;
    this.CliSer.alterar(recordRow.id, record);
    recordRow.isEdit = false;
  }

  logout() {
    this.afa.auth.signOut();
  }
  
}
