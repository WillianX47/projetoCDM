import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePagamentoPageRoutingModule } from './create-pagamento-routing.module';

import { CreatePagamentoPage } from './create-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePagamentoPageRoutingModule
  ],
  declarations: [CreatePagamentoPage]
})
export class CreatePagamentoPageModule {}
