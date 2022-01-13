import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AbstractListPageService } from '../../../shared/data-access/models/list-page.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService implements AbstractListPageService {
  constructor() {}

  getAll() {
    return of(['Arya', 'Tywin', 'Robb', 'Jamie', 'Davos']);
  }
}
