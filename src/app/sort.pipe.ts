import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any): any {
    const unsortedArray = value as Array<Object>;
    const sortedArray = unsortedArray.sort((a, b) => {
      if (a['name'] < b['name']) {
        return -1;
      }
      if (a['name'] > b['name']) {
        return 1;
      }
      return 0;
    });
    return sortedArray;
  }
}
