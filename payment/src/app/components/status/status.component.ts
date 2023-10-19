import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
@Input() paymentStatus: any  


constructor(private router: Router){
    setTimeout(()=> {
        this.router.navigate([''])
    }, 5000);

}
}
