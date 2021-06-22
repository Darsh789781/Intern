import { Injectable } from '@angular/core';
import {User} from '../model/subject'
import {BehaviorSubject, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }
  public userin  = new BehaviorSubject<User>(null);
  // myUser =this.userin.asObservable()
  
  addUser(user:User){
    this.userin.next(user)
//             console.log(user);      
console.log('aa',user)
  }
  // getUser(){
  //   return this.userin.asObservable();
  // }
}
