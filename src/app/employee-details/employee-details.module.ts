import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeDetailContainerComponent } from './employee-detail-container/employee-detail-container.component';
import { EmpListPresentationComponent } from './employee-detail-container/emp-list-presentation/emp-list-presentation.component';
import { EmployeeDetailsService } from './employee-details.service';


@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeDetailContainerComponent,
    EmpListPresentationComponent

    
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule
  ],
  providers:[EmployeeDetailsService]
})
export class EmployeeDetailsModule { }
