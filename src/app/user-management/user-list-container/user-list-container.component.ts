import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {
  public userdetailList$ : Observable<any> = of();

  constructor(private api:UserManagementService)
   { 
    this.userdetailList$ =this.api.getuserdetails()
  }

  ngOnInit(): void {
  }
  public onDeleteId(id: number) {
    
    this.userdetailList$=this.api.deleteuserdetail(id)
    
  }
  //For deleting User

}
