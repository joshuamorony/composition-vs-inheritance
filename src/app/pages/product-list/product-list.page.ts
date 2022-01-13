import { Component } from '@angular/core';
import { AbstractListPageService } from '../../shared/data-access/models/list-page.interface';
import { ProductsService } from './data-access/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  providers: [
    {
      provide: AbstractListPageService,
      useClass: ProductsService,
    },
  ],
})
export class ProductListPage {
  constructor(public listPage: AbstractListPageService) {}
}
