import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AbstractListPageService } from '../../../shared/page-base/list-page/list-page.service';

@Injectable()
export class EmployeesService extends AbstractListPageService {
  listData$ = this.getAll();

  getAll() {
    return of(['Arya', 'Tywin', 'Robb', 'Jamie', 'Davos']);
  }
}
