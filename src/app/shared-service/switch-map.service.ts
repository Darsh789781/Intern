import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/Crud';

@Injectable({
  providedIn: 'root'
})
export class SwitchMapService {

  constructor(private http:HttpClient) { }

  getSearch(search):Observable<Student>{
    
    return this.http.get<Student>("http://localhost:3000/Student/"+'?q='+search)
  }

  //argument used to search data using ?q= query parameter 
}
