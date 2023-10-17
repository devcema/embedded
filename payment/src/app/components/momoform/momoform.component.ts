import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/transactions.service';

@Component({
  selector: 'app-momoform',
  templateUrl: './momoform.component.html',
  styleUrls: ['./momoform.component.css']
})
export class MomoformComponent {
  paymentMethod: string = 'Mobile Money'
  momo_provider: string = 'Vodafone Cash' ;
  momoNumber: number = 0 ;
  otpRequired: boolean = false;
  status:string = ''
  otp!: number
  @Input() price!: number
  @Input() email!: string

  constructor(private transactionService: TransactionsService, private router: Router){}


  onSubmit() {
    
    console.log("Form submitted:", this.paymentMethod, this.momo_provider, this.momoNumber, this.price, this.email);
    
    if(!this.momo_provider && !this.momoNumber){
      alert('all fields are required')
      
    }

    if(this.momoNumber.toString().length !== 10){
      this.status = 'phone number must be 10 digits'
      
    } else{
      this.status = ''
      this.otpRequired = true

      if(this.otp !== 4444){
        this.status = 'Invalid OTP, redirecting';
        this.momoNumber=0;

        return;
         
      }

      this.status = '';

      let momoTransaction = {
        user:this.email,
        price: this.price,
        paymentMethod:this.paymentMethod,
        momoNumber: this.momoNumber,
        momo_provider: this.momo_provider,
       }
    
    
       this.transactionService.postTransactions(momoTransaction).subscribe((response) => console.log(response))
       
      
    }

    //@todo - api request to server
   
  }
}
