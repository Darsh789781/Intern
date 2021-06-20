import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Student} from '../model/Crud'
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  student:Student[]=[]

  fakeurl:string = 'http://localhost:3000/Student'

  constructor(private http:HttpClient) { }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>("http://localhost:3000/Student");
  }
  createstudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.fakeurl+'/', student, headerOption);
  }

  updatestudent(student: Student): Observable<Student> {
    debugger
    return this.http.put<Student>(this.fakeurl + '/' + student.id, student, headerOption);
  }

  deletestudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.fakeurl + '/' + id, headerOption);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(this.fakeurl + '/' + id);
}
}