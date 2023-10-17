import { Component} from '@angular/core';
import {Router} from '@angular/router'

 
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent  {
  transactions: any = [];

  constructor(private router: Router ) {}

  
  
  initiatePayment() {
    this.router.navigate(['initiatepayment']);
  }
}





