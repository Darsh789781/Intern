import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {
  id = this.route.snapshot.params['id'];

  constructor( private api:UserManagementService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }


  public addUserDetail(userdata){
    if(this.id){
      this.api.putUserData(this.id,userdata).subscribe(()=>{alert('updated succesfully')} )
     
    }else{ this.api.adduserdetail(userdata).subscribe(()=>{'Added succesfully'})}
   
  }

}
