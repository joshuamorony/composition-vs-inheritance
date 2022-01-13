import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ListPageService } from '../../../shared/page-base/list-page/list-page.service';
import { AbstractListPageService } from '../../../shared/page-base/list-page/list-page.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService
  extends ListPageService
  implements AbstractListPageService
{
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
