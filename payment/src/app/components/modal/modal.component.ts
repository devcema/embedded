import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  price:number = Math.floor(Math.random() * 60) + 100;
  email:string = 'user@email.com'
  paymentStatus: any = {}
  showcc: boolean = true;
  showmomo:boolean =false;

  constructor(private router: Router){

  }
  ngOnInit(): void {
    this.paymentStatus.status = ''
    this.paymentStatus.message = '' 
  }

 
  

  preventModalClose(event: Event) {
    event.stopPropagation(); // Prevent clicking inside the modal from closing it
  }

  togglePaymentMethod(divText: string){
    if(divText === 'cc'){
      this.showcc = true;
      this.showmomo = false
    } else if(divText === 'momo'){
      this.showmomo = true;
      this.showcc = false
    }
  }

  cancelPayment(){
    this.router.navigate([''])
  }
}
