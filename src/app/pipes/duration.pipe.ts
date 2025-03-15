import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Convertir "23 min per ep" a "23 minutos por capítulo"
    const regex = /(\d+)\s*min\s*per\s*ep/i;
    const match = value.match(regex);
    
    if (match) {
      const minutes = match[1];
      return `${minutes} minutos por capítulo`;
    }

    return value;
  }
}