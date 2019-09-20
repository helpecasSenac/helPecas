import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Pagina Inicial',
      url: 'pagina-inicial',
      icon: 'home'
    },
    {
      title: 'Produtos',
      url: 'produtos',
      icon: 'md-appstore'
    },
    {
      title: 'Fornecedores',
      url: 'fornecedores',
      icon: 'ios-paper'
    },
    {
      title: 'Sobre',
      url: 'sobre',
      icon: 'alert'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
