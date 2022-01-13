import { Component } from '@angular/core';
import { EmployeesService } from './data-access/employees.service';
import { ListPage } from '../../shared/feature/list-page/list-page.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage extends ListPage {
  constructor(private employeeService: EmployeesService) {
    super(employeeService);
  }
}
