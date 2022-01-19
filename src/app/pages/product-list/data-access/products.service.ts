import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AbstractListPageService } from '../../../shared/page-base/list-page/list-page.service';

@Injectable()
export class ProductsService extends AbstractListPageService {
  listData$ = this.getAll();

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
