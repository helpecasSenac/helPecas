import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MregistroService {

  constructor(public firestore: AngularFirestore) { }

  criar(record){
    return this.firestore.collection('clientes').add(record);
   }
  }