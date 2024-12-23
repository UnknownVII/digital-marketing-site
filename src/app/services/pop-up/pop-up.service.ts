import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  public popUp$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public popUpValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public fromPop$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  showPopUp(value: string): void {
    this.fromPop$.next(value);
    this.popUp$.next(true);
  }

  hidePopUp(): void {
    this.popUp$.next(false);
  }

  popUpValueChange(value: string): void {
    const currentFromPop = this.fromPop$.value || '';
    this.popUpValue$.next(`${value}-${currentFromPop}`);
  }
}
