import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

type Produto = {
  nomeProduto: string,
  cont: number,
  precoProduto: number,
  quantidadeProduto: number,
  precoTotal: number,
  pedidoTotal: number
}


@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  constructor(private storage: Storage) {
    this.storage.clear();
    this.loadFromStorage();
  }

  private produto: Produto[] = [];

  async Abacate(produto: Produto) {
    produto.nomeProduto = "Abacate (1 un)";
    produto.precoProduto = 4.49;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }

  async Banana(produto: Produto) {
    produto.nomeProduto = "Banana (1 cacho)";
    produto.precoProduto = 4.99;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }
  async Uva(produto: Produto) {
    produto.nomeProduto = "Uva (500g)";
    produto.precoProduto = 6.89;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }
  async Laranja(produto: Produto) {
    produto.nomeProduto = "Laranja (1kg)";
    produto.precoProduto = 1.75;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }
  async Maca(produto: Produto) {
    produto.nomeProduto = "Maçã (1kg)";
    produto.precoProduto = 7.69;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }
  async Tomate(produto: Produto) {
    produto.nomeProduto = "Tomate (100g)";
    produto.precoProduto = 3.99;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }
  async Alface(produto: Produto) {
    produto.nomeProduto = "Alface (1 maço)";
    produto.precoProduto = 2.99;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }
  async PastelQ(produto: Produto) {
    produto.nomeProduto = "Pastel de Queijo";
    produto.precoProduto = 5.99;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }
  async PastelC(produto: Produto) {
    produto.nomeProduto = "Pastel de Carne";
    produto.precoProduto = 5.99;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }
  async PastelP(produto: Produto) {
    produto.nomeProduto = "Pastel de Pizza";
    produto.precoProduto = 5.99;
    produto.precoTotal = produto.precoProduto * produto.quantidadeProduto;
    produto.pedidoTotal += produto.precoTotal;
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });
    this.storage.set('produto', this.produto);
  }


  private async loadFromStorage() {
    const storedProduto = await this.storage.get('produto');
    if (storedProduto) {
      this.produto.push(...storedProduto);
    }
  }

  public allProduto(): Readonly<Produto>[] {
    return this.produto;
  }

  public getProduto(cont: number): Produto {
    return { ...this.produto.find((s) => s.cont === cont) };
  }

  public updateCartao(cont: number, produto: Produto) {
    const oldProduto = this.produto.find((s) => s.cont === cont);
    oldProduto.nomeProduto = produto.nomeProduto;
    oldProduto.precoProduto = produto.precoProduto;
    oldProduto.quantidadeProduto = produto.quantidadeProduto;

    this.storage.set("produto", this.produto);
  }

  public addProduto(produto: Produto) {
    const maxCont = Math.max(0, ...this.produto.map(s => s.cont));
    produto.cont = maxCont + 1;
    this.produto.push({ ...produto });

    this.storage.set('produto', this.produto);

  }
}