import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bank } from '../../bank-model';
import { BankService } from '../../bank.service';

import { BankFormPresenterService } from '../bank-form-presenter/bank-form-presenter.service';

@Component({
  selector: 'app-bank-form-presentation',
  templateUrl: './bank-form-presentation.component.html',
  styleUrls: ['./bank-form-presentation.component.scss'],
  viewProviders:[BankFormPresenterService,BankService]
})
export class BankFormPresentationComponent implements OnInit {
Bank : any=['BOB','SBI','HDFC','ICICI']
currency = 'USD';
store:number;
// displayBankDetails:any;

options = [
   'USD', 
   'CAD',
   'INR',
   'Euro'
]

bank :Bank =new Bank();

public bankForm:FormGroup = this.bankPresenter.attachForm();
//attched form from the service presenter
  constructor(private bankPresenter:BankFormPresenterService,private bankService:BankService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.bank=this.bankForm.value

    this.bankService.postBank(this.bank).pipe(map((res)=> {if(check==='female'){
      this.store=   this.bankForm.get('basic_amount').value * 20/100+this.bankForm.get('basic_amount').value;
          console.log()
    }else{
      this.bankForm.get('basic_amount').value
    }
  })).subscribe(res=>{
      alert('Added')
    })
    let check=this.bankForm.get('gender').value
   
  }
 
 //Add form and manipulated female and  tried add interest 20%
 
}