import { Observable } from 'rxjs';

export abstract class AbstractListPageService {
  abstract getAll(): Observable<string[]>;
}
