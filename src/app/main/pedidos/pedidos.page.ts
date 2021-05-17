import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  constructor(private route: Router) { }

  favoritos() {
    this.route.navigate(['/main/produtos']);
  }

  repeat() {
    this.route.navigate(['/main/carrinho']);
  }

  ngOnInit() {
  }

}
