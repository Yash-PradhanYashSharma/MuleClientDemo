import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*private static host = '10.26.8.107';*/
  private static host = 'localhost';
  public static testURL = `http://${AppComponent.host}:8085/test`;
  public static cartUrl = `http://${AppComponent.host}:8081/v1/api/shipments/cart`;
  public static orderUrl = `http://${AppComponent.host}:8081/v1/api/shipments/order`;
  public static invoiceUrl = `http://${AppComponent.host}:8081/v1/api/shipments/invoice`;
  public static src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  title = 'MuleSoft Integration Middleware Accelerator';
}
