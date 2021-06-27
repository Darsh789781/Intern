import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SwitchMapService } from '../shared-service/switch-map.service';
import {switchMap} from 'rxjs/operators';
import {map} from 'rxjs/operators'
import { Student } from '../model/Crud';


@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {
@ViewChild('Form')Form:NgForm;
results:Student

  constructor(private switchMap :SwitchMapService) { }

  ngAfterViewInit(): void {

    // this.switchMap.getSearch('Bardoli').subscribe(res=>console.log(res))

    const inForm =this.Form.valueChanges;
    //take input data from Form with every valuechanges and stored in inForm

    inForm.pipe(
      
      map(data=>data.search),
      debounceTime(500),
      switchMap(res=>this.switchMap.getSearch(res))
      )
    .subscribe(res=>{//console.log(res)
              this.results=res})
  }
  //inForm is manipulated by using map change value is grabbed 
  
}
//switchMap service to search data through switchMap operator