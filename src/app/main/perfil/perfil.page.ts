import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private route: Router) { }

  public clickLog() {
    this.route.navigate(['/home']);
  }

  public clickPaga() {
    this.route.navigate(['/main/pagamento']);
  }

  public clickNoti() {
    this.route.navigate(['/main/notificacoes']);
  }

  ngOnInit() {
    
  }

}
