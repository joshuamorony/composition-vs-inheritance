import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { AbstractListPageService } from '../../../shared/data-access/models/list-page.interface';

@Injectable()
export class ProductsService implements AbstractListPageService {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(
    filter((contents): contents is string => typeof contents === 'string'),
    debounceTime(100)
  );
  listData$ = this.getAll();

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
