import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {from} from 'rxjs'
import { MapServiceService } from '../shared-service/mapservice.service';
import { UserT } from '../model/UserT';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    
  constructor(private mapService:MapServiceService) { }

  users:UserT []=[]
  /*Users array */

  ngOnInit(): void {
    this.mapService.getUsers().pipe(
      map((res:UserT[])=> 
      res.map(user=>{
        console.log(user)
        return{
          username : user.username,
          email:user.email
         
        }
        
      }))
    ).subscribe(res=>this.users=res )

    /* used map then filtered and manipulalted data ,fetched only username and email from the array of objects*/
  }
  
}
