import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
@Input() paymentStatus: any
otpCount: number = 0
otpForm: FormGroup
otpValid: boolean = false
otpInvalid: string = ''

constructor(private fb: FormBuilder , private router: Router){
this.otpForm = this.fb.group({
  otp: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
});
}

onSubmit() {
  if(this.otpForm.value.otp === '4444'){
    this.otpValid = true
    setTimeout(()=>{

      this.router.navigate([''])
    }, 2000)
  } else {
    this.otpInvalid = 'Wrong OTP, Check and try again'
    setTimeout(()=>{
      this.otpInvalid = ''
    },2000)
  }


}
}
