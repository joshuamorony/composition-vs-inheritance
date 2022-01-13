import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
import { DataListComponentModule } from 'src/app/shared/ui/data-list/data-list.component';
import { SearchBarComponentModule } from 'src/app/shared/ui/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListPageRoutingModule,
    DataListComponentModule,
    SearchBarComponentModule,
  ],
  declarations: [ProductListPage],
})
export class ProductListPageModule {}
