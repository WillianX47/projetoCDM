import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public userList = [];

  constructor(private communication: ApiService) {}

  ngOnInit() {
    this.communication.fetchUserList().then(
      () => {
        this.userList = this.communication.userList;
      }
    );
  }
}
