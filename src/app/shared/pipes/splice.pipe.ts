import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splice'
})
export class SlicePipe implements PipeTransform {

  transform(items: any[], start: number, end: number): any[] {
    const newArr:any[] = items.splice(start, end);
    return newArr;
  }

}
