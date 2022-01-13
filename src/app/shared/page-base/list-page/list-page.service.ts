import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';

export class ListPageService {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(
    filter((contents): contents is string => typeof contents === 'string'),
    debounceTime(100)
  );
}
