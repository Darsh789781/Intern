import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // fakeurl:string = 'http://localhost:3000/Student'

  constructor(private http:HttpClient) { }

  postStudent(data:any){
    return this.http.post<any>("http://localhost:3000/Student",data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  getStudent(){
    return this.http.get<any>("http://localhost:3000/Student/")
    .pipe(map((res:any)=>{
      return res
    }))
  }
  updateStudent(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/Student/"+id,data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/Student/"+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  

}
