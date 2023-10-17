import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit{

  transactions: any = [];

  constructor( private transactionService: TransactionsService) {}

  ngOnInit(): any {
   this.transactionService.getTransactions().subscribe((response:any) => {
    
    this.transactions = response.data;
  })
  
  
}
}
