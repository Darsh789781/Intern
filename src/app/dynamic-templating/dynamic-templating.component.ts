import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-templating',
  templateUrl: './dynamic-templating.component.html',
  styleUrls: ['./dynamic-templating.component.scss']
})
export class DynamicTemplatingComponent implements OnInit {

  public Employee = {

    User : [
      {
        EmployeeName : 'darsh',
        EmployeeSalary : 55555
      },
      {
        EmployeeName : 'YAsh',
        EmployeeSalary : 344
      },
      {
        EmployeeName : 'KAn',
        EmployeeSalary : 333
      },
      {
        EmployeeName : 'mAt',
        EmployeeSalary : 34444
      },
      {
        EmployeeName : 'kaisl',
        EmployeeSalary : 15000
      },
      

    ]
 
  }
   constructor() { }
      valid :boolean = false;


  public click()
  {
    this.valid=true;
  
  }

  ngOnInit(): void {
  }

}
