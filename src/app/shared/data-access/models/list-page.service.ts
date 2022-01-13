import { Observable } from 'rxjs';

export abstract class ListPageService {
  abstract getAll(): Observable<string[]>;
}
