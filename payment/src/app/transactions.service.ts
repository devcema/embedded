import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiEndpoint = 'http://localhost/backend/api.php';

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get(this.apiEndpoint);
  }

  postTransactions(transaction: any){
    return this.http.post(this.apiEndpoint, transaction, httpOptions)
  }

  // postTransaction(){
  //   return this.http.post
  // }
}
