import { PagamentoService } from 'src/app/pagamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/produtos.service';
import { Storage } from '@ionic/storage-angular';
import {AlertController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
import { EnderecoService } from 'src/app/endereco.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  constructor(private route: Router, private cartaoitem: PagamentoService,private enderecoitem: EnderecoService, 
    private item: ProdutosService, private storage: Storage, public alertController: AlertController,
    public toastController: ToastController) {}


  public click() {
    this.route.navigate(['/main/pagamento']); 
  }

  public clickEnde() {
    this.route.navigate(['/main/endereco']);
  }

  public adicionarMais() {
    this.route.navigate(['/main/produtos']); 
  }

  public produto = this.item.allProduto();

  public endereco = this.enderecoitem.allEndereco();

  public cartao = this.cartaoitem.allCartao();

  public async pedidoConfirmado() {
    const alert = await this.alertController.create({
      header: 'Seu pedido foi enviado e será entregue.',
      message: 'Aproveite!!!!!',
      buttons: [
        {
          text:  'Ok',
        }
      ] 
    }); this.route.navigate(['/main/inicio']); 
    alert.present();
  }

  ngOnInit() {}
}