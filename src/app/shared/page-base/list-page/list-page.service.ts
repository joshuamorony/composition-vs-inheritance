import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

export abstract class AbstractListPageService {
  searchControl: FormControl = new FormControl('');
  listSearch$ = this.searchControl.valueChanges.pipe(
    filter((contents): contents is string => typeof contents === 'string'),
    debounceTime(100)
  );

  abstract listData$: Observable<string[]>;
}
