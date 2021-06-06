import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarProdutosPageRoutingModule } from './adicionar-produtos-routing.module';

import { AdicionarProdutosPage } from './adicionar-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarProdutosPageRoutingModule
  ],
  declarations: [AdicionarProdutosPage]
})
export class AdicionarProdutosPageModule {}
