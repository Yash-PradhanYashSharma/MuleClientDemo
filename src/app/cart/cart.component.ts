import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../network.service';
import {CART} from './mock-cart';
import {Cart} from './Cart';
import {MessageService} from '../message.service';
import {CartResponse} from './CartResponse';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cart: Cart;
  private cartResponse: CartResponse;

  constructor(private networkService: NetworkService, private messageService: MessageService) {
    messageService.clear();
  }

  ngOnInit() {
    this.cart = CART;
  }

  getCart() {
    this.networkService.updateCart(this.cart).subscribe((res) => {
      this.cartResponse = res;
    });
  }

}
