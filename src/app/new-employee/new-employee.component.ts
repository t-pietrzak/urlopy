import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import Employee from 'src/app/modules/employee'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this.employeeService.create(this.employee).then((response:any)=>{
      console.log(response);
      this.submitted = true;
    }).catch((error:any)=>{
      console.log(error);
      this.submitted = false;
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
}
