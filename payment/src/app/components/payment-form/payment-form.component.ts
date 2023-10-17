import { Component, Input } from '@angular/core';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})

export class PaymentFormComponent {
  paymentMethod: string = 'Credit Card';
  cardNumber!: number ;
  cardExpiry: string = '';
  cardName: string = '';
  cardCvv!: number
  status: string = ''
  @Input() price: any
  @Input() email: any

  
  

  constructor(private transactionService: TransactionsService){}

  onSubmit() {
    if(!this.cardCvv && !this.cardExpiry && !this.cardName && !this.cardNumber){
      this.status = 'all fields required'
      return;
    } else {

      let ccTransaction = {
        user:this.email,
        price: this.price,
        paymentMethod:this.paymentMethod,
        cardName: this.cardName,
        cardNumber: this.cardNumber,
        cardCvv: this.cardCvv,
        cardExpiry: this.cardExpiry,
        
       }

       this.transactionService.postTransactions(ccTransaction).subscribe((response)=>{
          this.status = 'success';
       })

       this.cardName = ''
       this.cardExpiry=''
       this.cardNumber = 0
       this.cardCvv = 0
    }
    }
    
    
   
    //@todo - api request to server

  }

