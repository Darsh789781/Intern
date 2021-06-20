import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

import { StudentsComponent } from './students/students.component';
import { SubjectComponent } from './subject/subject.component';
import { ResponseSubjectComponent } from './response-subject/response-subject.component'
import { SubjectService } from './shared-service/subject.service';
import { Subject1Component } from './Subject1/subject1/subject1.component';
import { Subject2Component } from './Subject2/subject2/subject2.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    StudentsComponent,
    SubjectComponent,
    ResponseSubjectComponent,
    Subject1Component,
    Subject2Component
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
