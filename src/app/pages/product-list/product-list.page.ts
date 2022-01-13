import { Component } from '@angular/core';
import { BaseListPage } from '../../base-list-page/feature/list-page.component';
import { ProductsService } from './data-access/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage extends BaseListPage {
  constructor(private productsService: ProductsService) {
    super(productsService);
  }
}
