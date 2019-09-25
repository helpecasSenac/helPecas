import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'pagina-inicial', loadChildren: './pages/pagina-inicial/pagina-inicial.module#PaginaInicialPageModule' },
  { path: 'produtos', loadChildren: './pages/produtos/produtos.module#ProdutosPageModule' },
  { path: 'sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule' },
  { path: 'registrar', loadChildren: './pages/registrar/registrar.module#RegistrarPageModule' },
  //{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'edicao-produto', loadChildren: './pages/edicao-produto/edicao-produto.module#EdicaoProdutoPageModule' },
  { path: 'edicao-produto/:id', loadChildren: './pages/edicao-produto/edicao-produto.module#EdicaoProdutoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
