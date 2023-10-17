import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { FormsModule } from '@angular/forms';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { MomoformComponent } from './components/momoform/momoform.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { OtpcomponentComponent } from './component/otpcomponent/otpcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ModalComponent,
    PaymentFormComponent,
    TransactionsComponent,
    MomoformComponent,
    TransactionListComponent,
    OtpcomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }