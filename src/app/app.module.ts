import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

import { SubjectComponent } from './subject/subject.component';
import { ResponseSubjectComponent } from './response-subject/response-subject.component'
import { SubjectService } from './shared-service/subject.service';
import { StudentsComponent } from './students-Crud/students.component';
import { MapComponent } from './map/map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MvpComponent } from './mvp/mvp.component';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { NgxMaskModule } from 'ngx-mask';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { DynamicTemplatingComponent } from './dynamic-templating/dynamic-templating.component';
import { ElementReferenceComponent } from './element-reference/element-reference.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    SubjectComponent,
    ResponseSubjectComponent,
    StudentsComponent,
    MapComponent,
    SwitchMapComponent,
    MvpComponent,
    ForkjoinComponent,
    DynamicTemplatingComponent,
    ElementReferenceComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
