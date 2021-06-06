import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/produtos.service';
import { Storage } from '@ionic/storage-angular';
import {AlertController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  
  constructor(private route: Router, private item: ProdutosService, private storage: Storage, public alertController: AlertController,
    public toastController: ToastController) {}
  


  public click() {
    this.route.navigate(['/main/pagamento']); 
  }

  public adicionarMais() {
    this.route.navigate(['/main/produtos']); 
  }

  public removerItens() {
    this.storage.clear()
    this.route.navigate(['/main/produtos']);
  }

  public produto = this.item.allProduto();

  public async pedidoConfirmado() {
    const alert = await this.alertController.create({
      header: 'Seu Pedido Foi finalizado',
      message: 'Aproveite!!!!!',
      buttons: [
        {
          text:  'ok',
        }
      ] 
    }); this.route.navigate(['/main/inicio']); 
    alert.present();
  }

  ngOnInit() {}
}