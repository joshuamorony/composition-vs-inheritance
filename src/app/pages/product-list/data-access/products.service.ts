import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AbstractListPageService } from '../../../shared/data-access/models/list-page.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements AbstractListPageService {
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
