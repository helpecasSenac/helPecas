import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../services/interfaces/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth, 
    public firestore: AngularFirestore,
    private router:Router) { }


login(user: User) {

  return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
}

register(user: User ){
return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
}

getAuth(){
return this.afa.auth;
}

criar(record){
  return this.firestore.collection('Clientes').add(record);
}

signOut(): void {
  this.afa.auth.signOut();
  this.router.navigate(['/login'])
}


}