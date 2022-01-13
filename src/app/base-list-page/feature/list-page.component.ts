import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AbstractListPageService } from '../data-access/models/list-page.interface';

@Component({
  selector: 'app-list-page',
  template: ``,
})
export class BaseListPage {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(debounceTime(100));

  listData$ = this.pageService.getAll();

  constructor(private pageService: AbstractListPageService) {}
}
