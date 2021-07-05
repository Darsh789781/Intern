import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee-model';

@Injectable()
export class EmployeeDetailsService {
  employee: Employee[]

  constructor(private http: HttpClient) { }

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3000/employee")
  }
}
