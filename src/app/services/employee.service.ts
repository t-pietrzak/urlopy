import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Employee from '../modules/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private dbPath = '/employee';

  employeeRef: AngularFireList<Employee> = null
  // employeeRef = null;

  constructor(private db: AngularFireDatabase) {
    this.employeeRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Employee> {
    return this.employeeRef;
  }

  create(employee: Employee): any {
    return this.employeeRef.push(employee);
  }

  update(key:string, value:any): Promise<void> {
    return this.employeeRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.employeeRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.employeeRef.remove();
  }
}
