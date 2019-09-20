import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutosPage } from './produtos.page';

import { SearchPipe } from '../../pipes/search/search';
import { SortPipe } from '../../pipes/sort/sort';


const routes: Routes = [
  {
    path: '',
    component: ProdutosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), SearchPipe, SortPipe
  ],
  providers:[ SearchPipe, SortPipe ],
  declarations: [ProdutosPage, SearchPipe, SortPipe]
})
export class ProdutosPageModule {}
