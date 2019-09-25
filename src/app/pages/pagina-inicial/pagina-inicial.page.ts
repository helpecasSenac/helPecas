import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  constructor(public menuCtrl: MenuController,private afa: AngularFireAuth, 
    public firestore: AngularFirestore,) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.menuCtrl.enable(true);
  }

  logout() {
    this.afa.auth.signOut();
  }

  

}
