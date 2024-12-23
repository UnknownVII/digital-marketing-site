import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'snake' })
export class SnakeCasePipe implements PipeTransform {
  transform(inputString: string): string {
    if (inputString) {
      const words = inputString.split(/[- /]/g); // Split by whitespace

      words.filter(Boolean);
      return words.join('_').toLowerCase();
    }
    return 'undefined';
  }
}
