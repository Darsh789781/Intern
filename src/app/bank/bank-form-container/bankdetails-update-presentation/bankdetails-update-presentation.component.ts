import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BankFormPresenterService } from '../bank-form-presenter/bank-form-presenter.service';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../../bank.service';
import { Bank } from '../../bank-model';
@Component({
  selector: 'app-bankdetails-update-presentation',
  templateUrl: './bankdetails-update-presentation.component.html',
  styleUrls: ['./bankdetails-update-presentation.component.scss'],
})
export class BankdetailsUpdatePresentationComponent implements OnInit {
  Bank : any=['BOB','SBI','HDFC','ICICI']
  options = [
    'USD', 
    'CAD',
    'INR',
    'Euro'
 ]
 bank :Bank =new Bank();

  bankForm= new FormGroup({
    
    acc_no:new FormControl('', [Validators.minLength(5), Validators.maxLength(15)]),
    acc_name:new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    email:new FormControl('', [Validators.required,Validators.email]),
    phone_no:new FormControl(''),
    bank:new FormControl(),
    gender:new FormControl(),
    address: new FormControl(),
    basic_amount:new FormControl('', Validators.required),
    currency:new FormControl()
  })
  constructor(private router:ActivatedRoute,private bankService:BankService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.bankService.updateBank(this.router.snapshot.params.id).subscribe((res)=>{
      this.bankForm = new FormGroup({
        acc_no:new FormControl(res['acc_no']),
        acc_name:new FormControl(res['acc_name']),
        email:new FormControl(res['email']),
        phone_no:new FormControl(res['phone_no']),
        bank:new FormControl(res['bank']),
        gender:new FormControl(res['gender']),
        address: new FormControl(res['address']),
        basic_amount:new FormControl(res['basic_amount']),
        currency:new FormControl(res['currency'])
        //ptached value to the form for updation
      })
    })
  }

  updatedBankList(){
    console.log(this.bankForm.value)
    this.bankService.updatedBankList(this.router.snapshot.params.id,this.bankForm.value).subscribe(res=>{
      alert('Updated')
      console.log(res,'aaa')
      ///Updated Form
    })
  }

}
