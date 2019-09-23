import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Produtos {
  id?: string;
  estado: string;
  fabricante: number;
  modelo: string;
  nr_serie: number;
  preco: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(public firestore: AngularFirestore) { }
  
  criar(record){
    return this.firestore.collection('Produtos').add(record);
  }
  
  listar(){
    return this.firestore.collection('Produtos').snapshotChanges();
  }
  
  alterar(recordID, record){
    return this.firestore.doc('Produtos/' + recordID).update(record);
  }
  
  excluir(recordID){
    return this.firestore.doc('Produtos/' + recordID).delete();
  }
  
  getContato(id) {
    return this.firestore.doc<Produtos>('Produtos/' +id).valueChanges();
  } 
  


  
}
