import { Component } from '@angular/core';
import { EmployeesService } from './data-access/employees.service';
import { BaseListPage } from '../../base-list-page/feature/list-page.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage extends BaseListPage {
  constructor(private employeeService: EmployeesService) {
    super(employeeService);
  }
}
