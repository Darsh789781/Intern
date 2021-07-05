import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankFormContainerComponent } from './bank-form-container/bank-form-container.component';
import { BankdetailsUpdatePresentationComponent } from './bank-form-container/bankdetails-update-presentation/bankdetails-update-presentation.component';
import { BankListContainerComponent } from './bank-list-container/bank-list-container.component';
import { BankListPresentationComponent } from './bank-list-container/bank-list-presentation/bank-list-presentation.component';
import { BankComponent } from './bank.component';

const routes: Routes = [
  {
    path:'',
    component:BankComponent,
    children:[
      {
          path:'',
          component:BankListPresentationComponent
      },
      {
        path:'add',
        component:BankFormContainerComponent
      },
      {
        path:'update/:id',
        component:BankdetailsUpdatePresentationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
