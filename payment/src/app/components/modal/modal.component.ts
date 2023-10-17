import { Component, Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  price:number = Math.floor(Math.random() * 60) + 100;
  email:string = 'user@email.com'
  showcc: boolean = true;
  showmomo:boolean =false;

  constructor(private router: Router){

  }
  closeModal() {
    this.isOpen = false;
  }

  preventModalClose(event: Event) {
    event.stopPropagation(); // Prevent clicking inside the modal from closing it
  }

  setStatus(){
    
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
