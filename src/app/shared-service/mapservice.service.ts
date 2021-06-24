import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { UserT } from '../model/UserT';


@Injectable({
  providedIn: 'root'
})
export class MapServiceService {
  // users : Array<any>
  constructor(private http:HttpClient) { }

  getUsers():Observable<UserT[]>{
    return this.http.get<UserT[]>("https://jsonplaceholder.typicode.com/users")
  }

}

/*Service used to get data from jsonplaceholder*/
