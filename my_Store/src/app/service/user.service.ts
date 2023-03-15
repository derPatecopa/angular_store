import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string;
  userAddress: string;
  userValue: number;


  constructor() {
    this.userName = '';
    this.userAddress = '';
    this.userValue = 0;
   }
}
