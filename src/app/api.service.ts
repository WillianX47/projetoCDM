import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  "address": any,
  "company": any,
  "email": string,
  "id": number
  "name": string,
  "phone": string,
  "username": string,
  "website": string,
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public userList: User[];

  constructor(private http:HttpClient) {}

  async fetchUserList() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.userList = await this.http.get(url).toPromise() as User[];
  }

}
