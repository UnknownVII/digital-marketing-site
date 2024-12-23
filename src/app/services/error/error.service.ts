import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private errorFetchSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  errorFetch$ = this.errorFetchSubject.asObservable();

  setErrorFetch(value: boolean) {
    this.errorFetchSubject.next(value);
  }
  getErrorFetch() {
    return this.errorFetch$;
  }
}
