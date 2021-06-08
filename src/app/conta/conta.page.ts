import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {



  constructor(private communication: ApiService) { }

  public userList = [];

  ngOnInit() {
    this.communication.fetchUserList().then(
      () => {
        this.userList = this.communication.userList;
      }
    );
  }

}
