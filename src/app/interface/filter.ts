import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, selected: any): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      if (!searchText) {
        return true;
      }
      if (item === selected) {
        return true;
      }
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
