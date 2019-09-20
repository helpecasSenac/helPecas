import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EdicaoProdutoPage } from './edicao-produto.page';

const routes: Routes = [
  {
    path: '',
    component: EdicaoProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EdicaoProdutoPage]
})
export class EdicaoProdutoPageModule {}
