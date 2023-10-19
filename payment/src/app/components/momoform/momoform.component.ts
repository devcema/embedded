import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/transactions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-momoform',
  templateUrl: './momoform.component.html',
  styleUrls: ['./momoform.component.css']
})
export class MomoformComponent {
  paymentMethod: string = 'Mobile Money'
  otpRequired: boolean = false;
  momoForm: FormGroup;
  momoTransaction: any = {}
  @Input() price!: number
  @Input() email!: string
  @Input() paymentStatus: any

  constructor(private fb: FormBuilder, private transactionService: TransactionsService, private router: Router){
    this.momoForm = this.fb.group({
      momo_provider: ['mtn', Validators.required],
      momoNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  ngOnInit(): any {

  }

  onSubmit() {
    
    // Validate form 
    if(this.momoForm.valid){
      this.momoTransaction.paymentMethod = this.paymentMethod
      this.momoTransaction.price = this.price
      this.momoTransaction.user = this.email
      this.momoTransaction.momoNumber = +this.momoForm.value.momoNumber
      this.momoTransaction.momo_provider = this.momoForm.value.momo_provider
    }
      //Subscribe to post transaction service
       this.transactionService.postTransactions(this.momoTransaction).subscribe((response: any) => {

        // Assign response to payment status object
        this.paymentStatus.status = response.status;
        this.paymentStatus.message = response.message; 
       } )
       
       
    }
  }



