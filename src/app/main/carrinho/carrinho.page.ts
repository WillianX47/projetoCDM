import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  
  constructor(private route: Router) { }

  public click() {
    this.route.navigate(['/main/pagamento']);
  }

  ngOnInit() {
  }

}
