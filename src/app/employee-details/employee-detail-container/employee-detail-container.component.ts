import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee-detail-container',
  templateUrl: './employee-detail-container.component.html',
  styleUrls: ['./employee-detail-container.component.scss']
})
export class EmployeeDetailContainerComponent implements OnInit {
  public employeeList$: Observable<any> = of();
  constructor(private employeeDetail :EmployeeDetailsService) { 
    
  }

  ngOnInit(): void {
    this.employeeList$=this.employeeDetail.getEmployee();
  }

}
