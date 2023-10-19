import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failed-status',
  templateUrl: './failed-status.component.html',
  styleUrls: ['./failed-status.component.css']
})
export class FailedStatusComponent implements OnInit {
  @Input() paymentStatus: any  


  constructor(private router: Router){
   
  }
  ngOnInit(): void {
    setTimeout(()=> {
      this.paymentStatus.status = ''
  }, 3000);
  }

}
