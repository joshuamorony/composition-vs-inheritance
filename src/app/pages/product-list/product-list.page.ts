import { Component } from '@angular/core';
import { ListPage } from '../../shared/feature/list-page/list-page.component';
import { ProductsService } from './data-access/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage extends ListPage {
  constructor(private productsService: ProductsService) {
    super(productsService);
  }
}
