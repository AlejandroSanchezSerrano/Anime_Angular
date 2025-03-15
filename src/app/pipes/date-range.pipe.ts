import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

  private readonly months: { [key: string]: string } = {
    'Jan': 'Enero',
    'Feb': 'Febrero',
    'Mar': 'Marzo',
    'Apr': 'Abril',
    'May': 'Mayo',
    'Jun': 'Junio',
    'Jul': 'Julio',
    'Aug': 'Agosto',
    'Sep': 'Septiembre',
    'Oct': 'Octubre',
    'Nov': 'Noviembre',
    'Dec': 'Diciembre'
  };

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const dateRange = value.split(' to ');
    if (dateRange.length !== 2) {
      return value;
    }

    const startDate = this.formatDate(dateRange[0]);
    const endDate = this.formatDate(dateRange[1]);

    return `Desde el ${startDate} al ${endDate}`;
  }

  private formatDate(dateStr: string): string {
    const [month, day, year] = dateStr.split(' ');
    const dayNumber = parseInt(day.replace(',', ''), 10);
    const monthName = this.months[month];
    return `${dayNumber} de ${monthName} de ${year}`;
  }
}