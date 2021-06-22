import { Component, OnInit,OnDestroy } from '@angular/core';
import {User} from '../model/subject'
import {SubjectService} from '../shared-service/subject.service';
import {Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-response-subject',
  templateUrl: './response-subject.component.html',
  styleUrls: ['./response-subject.component.scss'],
})
export class ResponseSubjectComponent implements OnInit,OnDestroy {
  userX:User;
  // subscribe:Subscription;
  // name:any
  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
  this.subjectService.userin.subscribe((user)=>{
      this.userX = user;
      console.log('aaa',user)

    });

        //  console.log('aa',this.userx)

  }
  
  
  ngOnDestroy(){
      
  }

}
