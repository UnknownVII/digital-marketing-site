import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberWithCommas', standalone: false })
export class NumberWithCommasPipe implements PipeTransform {
  transform(input: number): string {
    return new Intl.NumberFormat().format(input);
  }
}
