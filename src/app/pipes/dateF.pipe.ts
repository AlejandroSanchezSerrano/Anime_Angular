import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateF',
})
export class DateF implements PipeTransform {
  private datePipe: DatePipe = new DatePipe('en-US');

  transform(value: string | null, format: string = 'dd-MM-yyyy'): string {
    if (value === null) {
      return 'En Desarrollo';
    }
    const transformedDate = this.datePipe.transform(value, format);
    return transformedDate ? transformedDate : 'Fecha Inválida';
  }
}