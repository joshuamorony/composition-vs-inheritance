import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAll() {
    return of([
      'Iron Throne',
      'Dragon Glass',
      'Arrow',
      'Leather',
      'Chain Mail',
      'Wine',
    ]);
  }
}
