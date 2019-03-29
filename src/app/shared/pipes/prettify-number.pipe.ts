import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'prettifyNumber'
})
export class PrettifyNumberPipe implements PipeTransform {

  transform(value: any): any {
    const thousand = 1000;
    const million = 1000000;
    const billion = 1000000000;
    const trillion = 1000000000000;

    if (value < thousand) {
      return value;
    } else if (value >= thousand && value <= 1000000) {
      return Math.round(value / thousand) + 'k';
    } else if (value >= million && value <= billion) {
      return Math.round(value / million) + 'M';
    } else if (value >= billion && value <= trillion) {
      return Math.round(value / billion) + 'B';
    } else {
      return Math.round(value / trillion) + 'T';
    }
  }

}
