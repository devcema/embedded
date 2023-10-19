import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/transactions.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})

export class PaymentFormComponent implements OnInit {
  paymentMethod: string = 'Credit Card';
  creditCardForm!: FormGroup;
  @Input() price: any
  @Input() email: any
  @Input() paymentStatus: any
  ccTransaction: any = {}

  

  constructor(private fb: FormBuilder, private transactionService: TransactionsService) {
    this.creditCardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cardName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      cardExpiry: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])/(20[0-9]{2}|[2-9][0-9]{3})')]],
      cardCvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });
  }


  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.creditCardForm.valid) {
      this.ccTransaction.paymentMethod = this.paymentMethod
      this.ccTransaction.price = this.price
      this.ccTransaction.user = this.email
      this.ccTransaction.cardName = this.creditCardForm.value.cardName
      this.ccTransaction.cardNumber = +this.creditCardForm.value.cardNumber
      this.ccTransaction.cardExpiry = this.creditCardForm.value.cardExpiry
      this.ccTransaction.cardCvv = +this.creditCardForm.value.cardCvv
      
      
    
      this.transactionService.postTransactions(this.ccTransaction).subscribe((response: any )=> {
        if(response.status === 'pending'){
          response.message = 'Payment pending, confirm OTP to proceed'
        } else {
          this.paymentStatus.status = response.status
          this.paymentStatus.message = response.message

        }
      })
    }
  }
  

  
    }
    


  




  
  // @Component({
  //   selector: 'app-payment-form',
  //   templateUrl: './payment-form.component.html',
  //   styleUrls: ['./payment-form.component.css']
  // })
  // export class CreditCardFormComponent implements OnInit {
  //   creditCardForm: FormGroup;
  
   
  // }
  



  // constructor(private transactionService: TransactionsService, private fb: FormBuilder){
  //   this.creditCardForm  = this.fb.group({
  //     cardNumber: [null, [Validators.required, Validators.pattern('[0-9]{16}')]],
  //     cardHolder: [null, Validators.required],
  //     expirationDate: [null, [Validators.required, Validators.pattern('(0[1-9]|1[0-2])/(20[0-9]{2}|[2-9][0-9]{3})')]],
  //     cvv: [null, [Validators.required, Validators.pattern('[0-9]{3}')]]
  //   });
  // }

  // onSubmit() {
   

  //     let ccTransaction = {
  //       user:this.email,
  //       price: this.price,
  //       paymentMethod:this.paymentMethod,
      
        
  //      }

  //      this.transactionService.postTransactions(ccTransaction).subscribe((response)=>{
  //         this.status = 'success';
  //      })

       
  //   }


