import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subject } from 'rxjs';


@Injectable()
export class BankFormPresenterService {
  // public customerData: Subject<any> = new Subject<any>();

  constructor() { }

  public attachForm(){
      return new FormGroup({
        acc_no:new FormControl('', [Validators.minLength(5), Validators.maxLength(15)]),
        acc_name:new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
        email:new FormControl('', [Validators.required,Validators.email]),
        phone_no:new FormControl(''),
        bank:new FormControl(),
        
        gender:new FormControl(),
        address: new FormControl(),
        basic_amount:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
        currency:new FormControl()

      })
  }
}
//Reactive form created