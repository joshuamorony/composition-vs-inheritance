import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ListPageService } from 'src/app/shared/data-access/models/list-page.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService implements ListPageService {
  constructor() {}

  getAll() {
    return of(['Arya', 'Tywin', 'Robb', 'Jamie', 'Davos']);
  }
}
