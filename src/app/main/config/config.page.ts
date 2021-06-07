import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  

  constructor(private route: Router) { }

  public clickPed() {
    this.route.navigate(['/main/pedidos']);
  }

  public clickLog() {
    this.route.navigate(['/home']);
  }


  ngOnInit() {
  }

}