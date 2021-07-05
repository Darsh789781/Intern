import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsComponent} from '../app/reactive-forms/reactive-forms.component'
import { MapComponent } from './map/map.component';
import { ResponseSubjectComponent } from './response-subject/response-subject.component';
import { StudentsComponent } from './students-Crud/students.component';
import { SubjectComponent } from './subject/subject.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

const routes: Routes = [{
  path:'reactive-forms',component:ReactiveFormsComponent
},
{
  path:'students',component:StudentsComponent
},
{
  path:'subject',component:SubjectComponent
},
{
  path:'response subject',component:ResponseSubjectComponent
},
{
  path:'map',component:MapComponent
},
{
  path:'switch-map',component:SwitchMapComponent
},
{
  path:'bank',loadChildren:()=>import('./bank/bank.module').then(m=>m.BankModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
