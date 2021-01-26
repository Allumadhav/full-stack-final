import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Account} from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts:Account[];
  constructor(private accountService: AccountService, private  router: Router) { }

  ngOnInit() {
    this.getAccounts();
  }
  private getAccounts(){
    this.accountService.getAccountsList().subscribe(data=>{
	this.accounts=data;
    });
  }
  updateAccount(id: number){
    console.log(`-----------`)
    this.router.navigate(['update-account', id]);
  }
  deleteAccount(id: number){
    this.accountService.deleteAccount(id).subscribe(data=>{
      this.getAccounts();
      console.log(data);
    })
  }

 
  accountDetails(id: number){
    this.router.navigate(['account-details', id]);
  }
}
