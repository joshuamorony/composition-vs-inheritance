import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { EmployeesService } from './data-access/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(
    filter((contents): contents is string => typeof contents === 'string'),
    debounceTime(100)
  );

  listData$ = this.employeeService.getAll();

  constructor(private employeeService: EmployeesService) {}
}
