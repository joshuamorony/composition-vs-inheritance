import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor() {}

  getAll() {
    return of(['Arya', 'Tywin', 'Robb', 'Jamie', 'Davos']);
  }
}
