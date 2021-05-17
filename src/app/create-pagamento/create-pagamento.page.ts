import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PagamentoService } from '../pagamento.service'

@Component({
  selector: 'app-create-pagamento',
  templateUrl: './create-pagamento.page.html',
  styleUrls: ['./create-pagamento.page.scss'],
})
export class CreatePagamentoPage implements OnInit {

  ngOnInit() {
  }

  public cartao = {
    num: 0,
    name: '',
    venc: '',
    numCartao: '',
    CPF: '',
    CVV: ''
  }

  constructor(
  private pagamentoService: PagamentoService,
  private navCtrl: NavController) { }

  onClick() {
    this.pagamentoService.addCartao(this.cartao);
    this.navCtrl.back();
  }

}
