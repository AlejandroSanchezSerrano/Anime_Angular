import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUp',  // Mantienes el mismo nombre
})
export class FirstUp implements PipeTransform {
  transform(value: string | null): string {
    if (value === null) {
      return 'En Desarrollo'; // Si el valor es null, retornamos un valor por defecto
    }
    if (value.length === 0) {
      return ''; // Si la cadena está vacía, retornamos una cadena vacía
    }
    // Convertir la primera letra a mayúscula y el resto de la cadena sin cambios
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
