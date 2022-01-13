import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { EmployeesService } from 'src/app/pages/employee-list/data-access/employees.service';
import { ProductsService } from '../../../pages/product-list/data-access/products.service';

export class ListPage {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(debounceTime(100));

  listData$ = this.dataService.getAll();

  constructor(private dataService: ProductsService | EmployeesService) {}
}
