import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastItem {
  toastClass: string;
  toastMessage: string;
  toastState: boolean;
}

export const TOAST_CLASS = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public toastItems$: BehaviorSubject<ToastItem[]> = new BehaviorSubject<
    ToastItem[]
  >([]);
  counter: number = 0;
  constructor() {}

  showToast(toastClass: string, toastMsg: string, limit: number = 6): void {
    const currentItems = this.toastItems$.value;

    currentItems.forEach((message) => {
      if (
        message.toastMessage === toastMsg &&
        message.toastClass === toastClass
      ) {
        this.counter++;
      }
    });

    if (this.counter > 0) {
      this.counter = 0;
      return;
    }

    this.counter = 0;

    const toastItem: ToastItem = {
      toastClass: toastClass,
      toastMessage: toastMsg,
      toastState: true,
    };

    if (currentItems.length >= limit) {
      currentItems.shift(); // Remove the oldest toast item
    }

    this.toastItems$.next([...currentItems, toastItem]);

    setTimeout(() => {
      toastItem.toastState = false;
      setTimeout(() => {
        this.dismissToast(toastItem);
      }, 250);
    }, 5000);
  }

  dismissAllToastsExceptError(): void {
    const currentItems = this.toastItems$.value;
    const errorItems = currentItems.filter(
      (item) => item.toastClass === TOAST_CLASS.error
    );
    this.toastItems$.next(errorItems);
  }

  dismissToast(toastItem: ToastItem): void {
    const currentItems = this.toastItems$.value;
    const updatedItems = currentItems.filter((item) => item !== toastItem);
    this.toastItems$.next(updatedItems);
    this.counter = 0;
  }
}
