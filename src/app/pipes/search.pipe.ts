import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(item: any[], terms: string): any[] {
    if(!item) return [];
    if(!terms) return item;
    terms = terms.toLowerCase();
    return item.filter( it => {
      return it.name.toLowerCase().includes(terms); 
    });
  }

}
