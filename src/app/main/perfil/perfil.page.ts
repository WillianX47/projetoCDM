import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private route: Router, private communication: ApiService) { }

  public userList = [];


  public clickIcon(){
    this.route.navigate(['/conta']);
  }

  public clickLog() {
    this.route.navigate(['/home']);
  }

  public clickPaga() {
    this.route.navigate(['/main/pagamento']);
  }

  public clickNoti() {
    this.route.navigate(['/main/notificacoes']);
  }

  public clickEnde() {
    this.route.navigate(['/main/endereco']);
  }

  public clickConfig() {
    this.route.navigate(['/main/config']);
  }

  ngOnInit() {
    this.communication.fetchUserList().then(
      () => {
        this.userList = this.communication.userList;
      }
    );
  }

}
