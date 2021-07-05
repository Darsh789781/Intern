import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Employee } from 'src/app/model/employee-model';
import { EmployeeDetailsService } from '../../employee-details.service';

@Injectable({
  providedIn: 'root'
})
export class EmpListPresenterService {
  public empId:Subject<any> = new Subject();
     constructor( private employeeDetail :EmployeeDetailsService) { }

   salary(salary: any): void {
    if (salary === 10000 ) {
      this.empId.next(this.employeeDetail.getEmployee);
    } else {
     
    }
  }
}
