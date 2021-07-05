import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bank } from './bank-model';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  
  constructor(private http:HttpClient) { }

  postBank(data:any){
    return this.http.post<any>("http://localhost:3000/Bank",data).pipe(map((res:any)=>{
      return res
    }))
  }
  getBank(){
    return this.http.get<any>("http://localhost:3000/Bank/")
    .pipe(map((res:any)=>{
      return res
    }))
  }
  updateBank(id:number){
    return this.http.get<any>("http://localhost:3000/Bank/"+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  deleteBank(id:number){
    return this.http.delete<any>("http://localhost:3000/Bank/"+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  getSearch(search):Observable<any>{
    
    return this.http.get<any>("http://localhost:3000/Bank/"+'?q='+search)
  }
  updatedBankList(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/Bank/"+id,data)
    // .pipe(map((res:any)=>{
    //   return res
    // }))
  }
}
