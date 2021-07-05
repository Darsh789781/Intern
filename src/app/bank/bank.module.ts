import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankFormPresentationComponent } from './bank-form-container/bank-form-presentation/bank-form-presentation.component';
import { BankFormContainerComponent } from './bank-form-container/bank-form-container.component';
import { BankComponent } from './bank.component';
import { BankService } from './bank.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { NgxMaskModule } from 'ngx-mask';
import { BankListContainerComponent } from './bank-list-container/bank-list-container.component';
import { BankListPresentationComponent } from './bank-list-container/bank-list-presentation/bank-list-presentation.component';
import { BankdetailsUpdatePresentationComponent } from './bank-form-container/bankdetails-update-presentation/bankdetails-update-presentation.component';


@NgModule({
  declarations: [
    BankComponent,
    BankFormContainerComponent,
    BankFormPresentationComponent,
    BankListContainerComponent,
    BankListPresentationComponent,
    BankdetailsUpdatePresentationComponent
    
    
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule,FormsModule
    
    
  ],
  
  providers:[
    BankService
  ]
})
export class BankModule { }
