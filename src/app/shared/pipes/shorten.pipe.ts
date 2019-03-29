import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, limit: number = 3): any {
    return value.slice(0, limit) + '...!!!';
  }

}
