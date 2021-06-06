import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarProdutosPage } from './adicionar-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarProdutosPageRoutingModule {}
