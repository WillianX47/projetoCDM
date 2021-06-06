import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEnderecoPage } from './create-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEnderecoPageRoutingModule {}
