import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

type Cartao = {
  num: number,
  name: string,
  venc: string,
  numCartao: string,
  numCartaoF: string,
  CPF: string,
  CVV: string
}

@Injectable({
  providedIn: 'root'
})

export class PagamentoService {
  
  constructor(private storage: Storage) {
    //this.storage.clear()
    this.loadFromStorage();
  }
  private cartao: Cartao[] = [];

  private async loadFromStorage() {
    const storedCartao = await this.storage.get('cartao');
    if (storedCartao) {
      this.cartao.push(...storedCartao);
    }
  }
  
  public allCartao(): Readonly<Cartao>[] { 
    return this.cartao;
  } 

  public getCartao(num: number): Cartao { 
    return {...this.cartao.find((s) => s.num === num) }; 
  } 

  public updateCartao(num: number, cartao: Cartao) { 
    const oldCartao = this.cartao.find((s) => s.num === num);
    oldCartao.name = cartao.name; 
    oldCartao.venc = cartao.venc;
    oldCartao.numCartao = cartao.numCartao;
    oldCartao.numCartaoF = cartao.numCartaoF;
    oldCartao.CPF = cartao.CPF;
    oldCartao.CVV = cartao.CVV;

    this.storage.set("cartao", this.cartao);
  } 

  public addCartao(cartao: Cartao) {
    const maxNum = Math.max(0, ...this.cartao.map(s => s.num));
    cartao.num = maxNum + 1;
    this.cartao.push({ ...cartao});

    this.storage.set('cartao', this.cartao);
  }
}
