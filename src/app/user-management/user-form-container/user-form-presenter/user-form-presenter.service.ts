import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFormPresenterService {

  public userdetailData: Subject<any> = new Subject();
  public userdetailData$: Observable<any>;

  constructor(private fb:FormBuilder) { 
    this.userdetailData$ = this.userdetailData.asObservable();
  }
  public bindForm(): FormGroup {
    return this.fb.group({
      firstname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],
      
      lastname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],
      client_name: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],


      email: ['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],      
      contact_no: ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],       
      office: ['',Validators.required],      
            
    })
  }
  public userdetail(bankdetailForm: FormGroup) {
    if (bankdetailForm.valid) {
      this.userdetailData.next(bankdetailForm.value);
    } 
  }
}
