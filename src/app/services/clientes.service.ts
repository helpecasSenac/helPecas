import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(public firestore: AngularFirestore) { }
  criar(record){
    return this.firestore.collection('Clientes').add(record);
   }
  
  listar(){
    return this.firestore.collection('Clientes').snapshotChanges();
   }
  
  alterar(recordID, record){
    return this.firestore.doc('Clientes/' + recordID).update(record);
   }
  
  excluir(recordID){
    return this.firestore.doc('Clientes/' + recordID).delete();
   } 
}




  
  