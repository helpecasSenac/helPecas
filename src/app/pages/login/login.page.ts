import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../../services/interfaces/user';
import { registerLocaleData } from '@angular/common';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides, {static: true}) slides: IonSlides;

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  cnpj: string;
  nomefant: string;
  razaosocial: string;
  endereco: string;
  telefone: string;

  constructor( public navCtrl: NavController,public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,private authService: AuthService) {
  }

  ngOnInit(){}

  segmentChanged(event: any){
    
   if(event.detail.value === "login") {
     this.slides.slidePrev();
   }
   else{
this.slides.slideNext();

   }
  }

async login() {
  
  await this.presentLoading();
 
  try{
    await this.authService.login(this.userLogin);
    }catch(error){
this.presentToast(error.message);
    }finally{
      this.loading.dismiss();
    }


}

 async register(){

await this.presentLoading();

try{
await this.authService.register(this.userRegister);
}catch(error){
  let message: string;

switch(error.code) {
  
case 'auth/email-already-in-use':
message = 'O endereço de E-mail já está registrado';
break;

case 'auth/invalid-email':
  message = 'E-mail inválido';
  break;
}

let record = {};
  record['CNPJ'] = this.cnpj;
  record['end'] = this.endereco;
  record['nomeFant'] = this.nomefant;
  record['razaoSoc'] = this.razaosocial;
  record['tel'] = this.telefone;

  this.authService.criar(record).then(resp => {
    this.cnpj = "";
    this.endereco = "";
    this.nomefant = "";
    this.razaosocial = "";
    this.telefone = "";

  });
 


  this.presentToast(message);

}finally{
  this.loading.dismiss();
}

  this.loading.dismiss();

}

async presentLoading() {
  this.loading = await this.loadingCtrl.create({
    message: 'Por favor, aguarde',
  
  });
  return this.loading.present();

}

async presentToast(message: string) {
  const toast = await this.toastCtrl.create({
    message,
    duration: 2000
  });
  toast.present();
}
  
}