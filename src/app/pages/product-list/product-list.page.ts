import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ListPageService } from 'src/app/shared/data-access/models/list-page.service';
import { ProductsService } from './data-access/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  providers: [
    {
      provide: ListPageService,
      useClass: ProductsService,
    },
  ],
})
export class ProductListPage {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(debounceTime(100));
  listData$ = this.pageService.getAll();

  constructor(public pageService: ListPageService) {}
}
