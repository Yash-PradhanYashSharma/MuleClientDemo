import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../network.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm = new FormGroup({
    orderId: new FormControl(''),
  });
  cart;

  constructor(private networkService: NetworkService, private messageService: MessageService) {
    messageService.clear();
  }

  ngOnInit() {
  }

  getOrder(): void {
    console.log(this.orderForm.value.toString());
    this.networkService.getOrder(this.orderForm.value).subscribe((res) => {
      console.log(res);
      this.cart = res;
    });
  }
}
