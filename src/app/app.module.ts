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

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    SubjectComponent,
    ResponseSubjectComponent,
    StudentsComponent
   
    
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
