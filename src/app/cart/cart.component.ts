import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../network.service';
import {CART, CARTJSON} from './mock-cart';
import {Cart} from './Cart';
import {Message} from '../messages/Message';
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
  }

  ngOnInit() {
    this.cart = CART;
  }

  getCart() {
    this.networkService.updateCart(CARTJSON).subscribe((res) => {
      this.cartResponse = res;
      this.messageService.add(new Message(this.cartResponse.orderId, this.cartResponse.status, '', 'success'));
    });
  }

}
