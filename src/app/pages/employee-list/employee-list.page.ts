import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ListPageService } from 'src/app/shared/data-access/models/list-page.service';
import { EmployeesService } from './data-access/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
  providers: [
    {
      provide: ListPageService,
      useClass: EmployeesService,
    },
  ],
})
export class EmployeeListPage {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(debounceTime(100));
  listData$ = this.pageService.getAll();

  constructor(public pageService: ListPageService) {}
}
