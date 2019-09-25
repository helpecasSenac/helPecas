import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registrar'
})
export class RegistrarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
