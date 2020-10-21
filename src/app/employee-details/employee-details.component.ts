import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import Employee from 'src/app/modules/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnChanges {
// Doczytać OnChanges!
  @Input() employee: Employee;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentEmployee: Employee = null;
  message = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentEmployee = {...this.employee};
  }

  updatePublished(status): void {
    this.employeeService.update(this.currentEmployee.name, {published: status})
      .then(()=>{
        this.currentEmployee.published = status;
        this.message = 'The status was updated successfully!';
      })
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.name)
      .then(() => {
        this.refreshList.emit();
        this.message = 'Employee was deleted!'
      })
      .catch(error => {console.log(error)});
  }

}
