import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListPresenterService {
  public userdetailId: Subject<any> = new Subject();
  public userdetailId$!: Observable<any>;
  userdetailData: any = [];
  constructor() { 
    this.userdetailId$=this.userdetailId.asObservable();
  }
  public deleteUserdetail(id: number) {
  
    console.log('delete', id);
    
    this.userdetailId.next(id);
    
  }
}
