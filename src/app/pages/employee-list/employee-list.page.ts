import { Component } from '@angular/core';
import { AbstractListPageService } from '../../shared/page-base/list-page/list-page.interface';
import { EmployeesService } from './data-access/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
  providers: [
    {
      provide: AbstractListPageService,
      useClass: EmployeesService,
    },
  ],
})
export class EmployeeListPage {
  constructor(public listPage: AbstractListPageService) {}
}
