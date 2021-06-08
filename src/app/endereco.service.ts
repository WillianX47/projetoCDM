import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

type Endereco = {
  num: number,
  log: String,
  numCasa: String,
  cep: String,
  comp: String,
}

@Injectable({
  providedIn: 'root'
})

export class EnderecoService {

  constructor(private storage: Storage) {
    this.storage.clear();
    this.loadFromStorage();
  }
  private endereco: Endereco[] = [];

  private async loadFromStorage() {
    const storedEndereco = await this.storage.get('endereco');
    if (storedEndereco) {
      this.endereco.push(...storedEndereco);
    }
  }

  public allEndereco(): Readonly<Endereco>[] {
    return this.endereco;
  }

  public getEndereco(num: number): Endereco {
    return { ...this.endereco.find((s) => s.num === num) };
  }

  public updateEndereco(num: number, endereco: Endereco) {
    const oldEndereco = this.endereco.find((s) => s.num === num);
    oldEndereco.log = endereco.log;
    oldEndereco.numCasa = endereco.numCasa;
    oldEndereco.cep = endereco.cep;
    oldEndereco.comp = endereco.comp;


    this.storage.set("endereco", this.endereco);
  }

  public addEndereco(endereco: Endereco) {
    const maxNum = Math.max(0, ...this.endereco.map(s => s.num));
    endereco.num = maxNum + 1;
    this.endereco.push({ ...endereco });

    this.storage.set('endereco', this.endereco);
  }
}
