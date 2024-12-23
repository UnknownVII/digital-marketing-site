import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camel' })
export class CamelCasePipe implements PipeTransform {

  transform(inputString: string): string {
    const words = inputString.split(/[- ]/g); // Split by whitespace

    const sentence = words.map((word: any, index: number) =>
      index > 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.charAt(0).toLowerCase() + word.slice(1).toLowerCase()
    );
    return sentence.join('');
  }

}
