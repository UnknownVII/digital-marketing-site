import { NativeDateAdapter } from '@angular/material/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero((date.getMonth() + 1).toString());
    const day = this.padZero(date.getDate().toString());
    return `${year}-${month}-${day}`;
  }

  private padZero(value: string): string {
    return value.length === 1 ? `0${value}` : value;
  }
}
