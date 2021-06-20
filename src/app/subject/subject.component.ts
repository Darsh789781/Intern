import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{User} from '../model/subject'
import { SubjectService } from '../shared-service/subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  @ViewChild('myForm', { static: false }) userForm: NgForm; 
  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const newUser = new User(this.userForm.value['name'], this.userForm.value['surname']);
    this.subjectService.addUser(newUser)
    console.log('a',newUser)
    // this.subjectService.userin.next(newUser)
  }
}
