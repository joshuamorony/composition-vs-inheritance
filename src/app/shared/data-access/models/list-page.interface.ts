import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export abstract class AbstractListPageService {
  abstract searchControl: FormControl;
  abstract listSearch$: Observable<string>;
  abstract listData$: Observable<string[]>;
}
