import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutosService } from '../produtos.service'

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.page.html',
  styleUrls: ['./adicionar-produtos.page.scss'],
})
export class AdicionarProdutosPage implements OnInit {

  ngOnInit() {
  }

  public produto = {
    nomeProduto: '',
    cont: 0,
    precoProduto: 0,
    quantidadeProduto: null,
    precoTotal: 0,
    pedidoTotal: 0
  }
  
  constructor(
  private produtosService: ProdutosService,
  private navCtrl1: NavController) { }


  onClick() {
    this.produtosService.addProduto(this.produto);
    this.navCtrl1.back();
  }


}
