import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Account } from './account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseURL="http://localhost:8081/bankapp/account";
  constructor(private httpClient: HttpClient) { }

  getAccountsList(): Observable<Account[]>{
   // let username='admin'
    //let password='admin123'
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //return this.httpClient.get<Account[]>(`${this.baseURL}`,{headers});
    return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }
  createAccount(account: Account): Observable<Object>{
    //let username='admin'
    //let password='admin123'
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //return this.httpClient.post(`${this.baseURL}`, account,{headers});
    return this.httpClient.post(`${this.baseURL}`, account);
  }
  updateAccount(id: number, account: Account): Observable<Object>{
    //let username='admin'
    //let password='admin123'
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //return this.httpClient.put(`${this.baseURL}/${id}`, account,{headers});
    return this.httpClient.put(`${this.baseURL}/${id}`, account);
  }
  getAccountById(id: number): Observable<Account>{
    //let username='admin'
    //let password='admin123'
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //return this.httpClient.get<Account>(`${this.baseURL}/${id}`,{headers});
    return this.httpClient.get<Account>(`${this.baseURL}/${id}`);
  }
  deleteAccount(id: number): Observable<Object>{
    //let username='admin'
    //let password='admin123'
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //return this.httpClient.delete(`${this.baseURL}/${id}`,{headers});
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
