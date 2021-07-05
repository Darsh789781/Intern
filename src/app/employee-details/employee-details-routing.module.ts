import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailContainerComponent } from './employee-detail-container/employee-detail-container.component';
import { EmployeeDetailsComponent } from './employee-details.component';

const routes: Routes = [
  {
    path:'',
    component: EmployeeDetailsComponent,
    children:[
      {
        path:'',
        component:EmployeeDetailContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }
