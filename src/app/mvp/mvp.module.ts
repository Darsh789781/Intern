import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpRoutingModule } from './mvp-routing.module';
import { Mvp1PresentationComponent } from './mvp1-container/mvp1-presentation/mvp1-presentation.component';


@NgModule({
  declarations: [
    Mvp1PresentationComponent
  ],
  imports: [
    CommonModule,
    MvpRoutingModule
  ]
})
export class MvpModule { }
