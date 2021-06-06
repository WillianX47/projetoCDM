import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  constructor( private ende: EnderecoService ) { }

  public endereco = this.ende.allEndereco();

  ngOnInit() {
  }

}
