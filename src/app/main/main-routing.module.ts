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
      },

      {
        path: 'pedidos',
        loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosPageModule)
      },
      
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
      },

      {
        path: 'notificacoes',
        loadChildren: () => import('./notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
      },

      {
        path: 'endereco',
        loadChildren: () => import('./endereco/endereco.module').then( m => m.EnderecoPageModule)
      },
      {
        path: 'config',
        loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
      },
]
 },
  





]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
