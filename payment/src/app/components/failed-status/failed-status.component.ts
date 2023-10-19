import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failed-status',
  templateUrl: './failed-status.component.html',
  styleUrls: ['./failed-status.component.css']
})
export class FailedStatusComponent {
  @Input() paymentStatus: any  


  constructor(private router: Router){
    setTimeout(()=> {
      this.router.navigate(['initiatepayment'])
  }, 5000);
  }

}
