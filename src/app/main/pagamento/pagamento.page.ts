import { Component, OnInit } from '@angular/core';
import { PagamentoService } from 'src/app/pagamento.service';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor( private pagamento: PagamentoService ) { }

  public cartao = this.pagamento.allCartao();

  ngOnInit() {
  }
  

}