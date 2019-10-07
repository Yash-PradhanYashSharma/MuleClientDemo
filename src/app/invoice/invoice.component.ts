import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../network.service';
import {Invoice} from './Invoice';
import {Lines} from './Lines';
import {FormControl, FormGroup} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {AppComponent} from '../app.component';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoiceValue: Invoice;
  lines: Lines[];
  src2: string;

  invoiceForm = new FormGroup({
    invoiceId: new FormControl(''),
  });

  constructor(private networkService: NetworkService) {
  }

  ngOnInit() {
  }

  getInvoice(): void {
    /*console.log(this.invoiceForm.value);*/
    this.networkService.getInvoice(this.invoiceForm.value).subscribe(res => {
      this.invoiceValue = res;
      const lines = res['lines'];
      /*console.log(lines);*/
      this.lines = lines['data'];
    });
  }

  getInvoicePDF() {
    this.networkService.getInvoicePDF(this.invoiceForm.value).subscribe((response) => {
      const file = new Blob([response], {type: 'application/pdf'});
      saveAs(file, 'invoice.pdf');
/*      const fileURL  = URL.createObjectURL(file);
      window.open(fileURL);*/
    });
  }
}
