import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EnderecoService } from '../endereco.service'

@Component({
  selector: 'app-create-endereco',
  templateUrl: './create-endereco.page.html',
  styleUrls: ['./create-endereco.page.scss'],
})
export class CreateEnderecoPage implements OnInit {

  ngOnInit() {
  }

  public endereco = {
    num: 0,
    log: '',
    numCasa: '',
    cep: '',
    comp: '',
  }

  constructor(
    private enderecoService: EnderecoService,
    private navCtrl: NavController) { }

  onClick() {
    this.enderecoService.addEndereco(this.endereco);
    this.navCtrl.back();
  }

}
