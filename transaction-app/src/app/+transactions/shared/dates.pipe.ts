import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datesPipe'
})
export class DatesPipe implements PipeTransform {
  transform(dateValue: number): string {
    const date = moment(new Date(dateValue));
    return date.format('YYYY MMM DD');
  }
}
