import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee-model';

@Component({
  selector: 'app-emp-list-presentation',
  templateUrl: './emp-list-presentation.component.html',
  styleUrls: ['./emp-list-presentation.component.scss']
})
export class EmpListPresentationComponent implements OnInit {
   employeeList:Employee[]= []
  constructor() { }
  @Input() public set allList(value: Employee[]) {
    if (value) {
      
      this.employeeList = value
    }
  }
  public get allList(): Employee[] {
    return this.employeeList
  }
  ngOnInit(): void {
  }

}
