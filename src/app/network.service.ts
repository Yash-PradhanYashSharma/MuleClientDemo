import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {Cart} from './cart/Cart';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {CARTJSON} from './cart/mock-cart';
import {Order} from './order/Order';
import {InvoiceRequest} from './invoice/InvoiceRequest';
import {Message} from './messages/Message';
import {AppComponent} from './app.component';
import {Invoice} from './invoice/Invoice';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'client_id': 'cd8b515f39b4459ba064ff571c515334',
      'client_secret': '615175E0C7C2486581026e273633C899'
    })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getInvoice(invoice: InvoiceRequest): Observable<any> {
    const finalURL = AppComponent.invoiceUrl + '/' + invoice.invoiceId;
    return this.http.get(finalURL, this.httpOptions).pipe(
      tap((invoiceResp: Invoice) => {
        this.log(invoiceResp.id, 'Get Invoice', '');
      }), catchError(this.handleError<any>('getInvoice', [])));
  }

  getInvoicePDF(invoice: InvoiceRequest): Observable<any> {
    const finalURL = 'http://localhost:8085/test';
    const httpOptions = {
      'responseType': 'arraybuffer' as 'json'
      // 'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.get(finalURL, httpOptions).pipe(
      tap((invoiceResp: Invoice) => {
        this.log(invoiceResp.id, 'Get Invoice PDF', '');
      }), catchError(this.handleError<any>('getInvoicePDF', [])));
  }

  getOrder(order: Order): Observable<any> {
    console.log(order);
    return this.http.post(AppComponent.orderUrl, order, this.httpOptions).pipe(
      tap((orderResp: Order) => {
        this.log(orderResp.orderId, 'Get Order', '');
      }), catchError(this.handleError<any>('getOrder', [])));
  }

  updateCart(cart: any): Observable<any> {
    return this.http.post<Cart>(AppComponent.cartUrl, cart, this.httpOptions).pipe(
      tap((cartResp: Cart) => {
        this.log(cartResp.userId, 'Get Cart', '');
      }), catchError(this.handleError<any>('updateCart', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error): Observable<T> => {
      this.logError('', 'Oops! Something went wrong. We\'ll fix it Soon. report error', '');
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

  private log(code, message, link) {
    this.messageService.add(new Message(code, message, link, 'success'));
  }

  private logError(code, message, link) {
    this.messageService.add(new Message(code, message, link, 'danger'));
  }
}

