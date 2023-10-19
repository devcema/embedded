import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ModalComponent } from './components/modal/modal.component';
import { OtpComponent } from './components/otp/otp.component';

const routes: Routes = [
  {path:'', component: TransactionsComponent},
  {path:'initiatepayment', component: ModalComponent}
  // {path:'requireotp', component: OtpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
