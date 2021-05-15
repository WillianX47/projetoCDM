import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePagamentoPage } from './create-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePagamentoPageRoutingModule {}
