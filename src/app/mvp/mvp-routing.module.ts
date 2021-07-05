import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvpComponent } from './mvp.component';
import { Mvp1PresentationComponent } from './mvp1-container/mvp1-presentation/mvp1-presentation.component';

const routes: Routes = [{path:'',component:MvpComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpRoutingModule { }
