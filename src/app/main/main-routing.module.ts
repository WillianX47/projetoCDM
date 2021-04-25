import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [

  {
    path: '',
    component: MainPage,
    children: [

      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
      },

      {
        path: 'pagamento',
        loadChildren: () => import('./pagamento/pagamento.module').then(m => m.PagamentoPageModule)
      },

      {
        path: 'produtos',
        loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosPageModule)
      },

      {
        path: 'carrinho',
        loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoPageModule)
      }

    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
