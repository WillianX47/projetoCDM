import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEnderecoPageRoutingModule } from './create-endereco-routing.module';

import { CreateEnderecoPage } from './create-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEnderecoPageRoutingModule
  ],
  declarations: [CreateEnderecoPage]
})
export class CreateEnderecoPageModule {}
