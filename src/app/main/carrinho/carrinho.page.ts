import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/produtos.service';



@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  
  constructor(private route: Router, private item: ProdutosService) {}
  


  public click() {
    this.route.navigate(['/main/pagamento']); 
  }

  public produto = this.item.allProduto();



  ngOnInit() {}




}

