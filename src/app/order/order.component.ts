import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../network.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Order} from './Order';

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

  constructor(private networkService: NetworkService) {
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
