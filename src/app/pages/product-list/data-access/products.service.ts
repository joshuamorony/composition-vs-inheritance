import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ListPageService } from 'src/app/shared/data-access/models/list-page.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements ListPageService {
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
