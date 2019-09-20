import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides,{ static: true }) slides: IonSlides;
  
  email:string;
  senha:string;

  constructor(public navCtrl: NavController,public menuCtrl: MenuController) { }

  ngOnInit(){}
    segmentChanged(event: any){
      if(event.detail.value === "login") {
        this.slides.slidePrev();
      }
      else{
        this.slides.slideNext();
      }
    }
    
    entrar(){
      console.log("E-mail: " + this.email);
      console.log("Senha: " + this.senha);
    }

    ionViewWillEnter(){
      this.menuCtrl.enable(false);
    }
}