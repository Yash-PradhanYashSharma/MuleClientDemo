import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static host = 'localhost';
  private static host2 = '10.26.8.107';
  public static cartUrl = `http://${AppComponent.host2}:8081/v1/api/shipments/cart`;
  public static orderUrl = `http://${AppComponent.host2}:8081/v1/api/shipments/order`;
  public static invoiceUrl = `http://${AppComponent.host2}:8081/v1/api/shipments/invoice`;
  title = 'MuleSoft Integration Middleware Accelerator';
}
