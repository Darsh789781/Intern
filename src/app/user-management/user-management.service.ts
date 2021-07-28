import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user-management';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }
  public adduserdetail(data: User): Observable<User> {
    return this.http.post<User>(this.URL, data);
  }
  public getuserdetails(): Observable<User> {
    return this.http.get<User>(this.URL);
  }
  getSearch(search: string):Observable<any>{
    
    return this.http.get<any>(this.URL+'?q='+search)
  }

  public deleteuserdetail(id: number) {
    return this.http.delete<User>(this.URL + '/' + id);
  }
  public UserdataId(id: number): Observable<User> {
    return this.http.get<User>(this.URL + '/' + id);
  }

  // Update Bank Detail By ID
  public putUserData(
    id: number,
    data: User
  ): Observable<User> {
    return this.http.put<User>(this.URL + '/' + id, data);
  }
}
