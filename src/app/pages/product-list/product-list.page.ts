import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { ProductsService } from './data-access/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(
    filter((contents): contents is string => typeof contents === 'string'),
    debounceTime(100)
  );

  listData$ = this.productService.getAll();

  constructor(private productService: ProductsService) {}
}
