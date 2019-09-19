import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
}
