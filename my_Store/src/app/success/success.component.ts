import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { CartService } from '../service/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
userName: string;
userAdress: string;
userValue: number;

  constructor(private userService: UserService, private cartService: CartService, private cartComponent: CartComponent) {
    this.userName = userService.userName;
    this.userAdress = userService.userAddress;
    this.userValue = userService.userValue;
  }

  ngOnInit(): void {

  }

}
