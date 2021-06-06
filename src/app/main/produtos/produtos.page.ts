import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(public navCtrl1: NavController, private produtosService: ProdutosService) {

}

  ngOnInit() {
  }

  public produto = {
    nomeProduto: '',
    cont: 0,
    precoProduto: 0,
    quantidadeProduto: null,
    precoTotal: 0,
    pedidoTotal: 0,
  }

  public addAbacate(){
    this.produtosService.Abacate(this.produto);
  }
  public addBanana(){
    this.produtosService.Banana(this.produto);
  }
  public addUva(){
    this.produtosService.Uva(this.produto);
  }
  public addLaranja(){
    this.produtosService.Laranja(this.produto);
  }
  public addMaca(){
    this.produtosService.Maca(this.produto);
  }
  public addTomate(){
    this.produtosService.Tomate(this.produto);
  }
  public addAlface(){
    this.produtosService.Alface(this.produto);
  }
  public addPastelQ(){
    this.produtosService.PastelQ(this.produto);
  }
  public addPastelC(){
    this.produtosService.PastelC(this.produto);
  }
  public addPastelP(){
    this.produtosService.PastelP(this.produto);
  }


}