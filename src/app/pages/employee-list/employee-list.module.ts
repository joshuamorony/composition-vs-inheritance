import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeListPageRoutingModule } from './employee-list-routing.module';

import { EmployeeListPage } from './employee-list.page';
import { DataListComponentModule } from 'src/app/shared/ui/data-list/data-list.component';
import { SearchBarComponentModule } from 'src/app/shared/ui/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeListPageRoutingModule,
    DataListComponentModule,
    SearchBarComponentModule,
  ],
  declarations: [EmployeeListPage],
})
export class EmployeeListPageModule {}
