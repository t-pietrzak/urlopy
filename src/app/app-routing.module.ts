import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DaysLeftComponent } from './days-left/days-left.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
  {path: 'days-left', component: DaysLeftComponent},
  {path: 'account', component: AccountComponent},
  {path: 'new-employee', component: NewEmployeeComponent},
  {path: 'panel-pracodawcy', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
