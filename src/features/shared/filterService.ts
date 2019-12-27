import {Injectable} from '@angular/core';
import {mainDataService} from './mainData.injectable';

@Injectable()

export class FilterService {
  constructor(public dataService: mainDataService){

  }
  findItemById(categories, id) {
    let foundCategory = {};
    let categoriesToUse = categories ? categories : this.dataService.categories;
    categoriesToUse.forEach(function(item) {
      if(item._id === Number(id)){
        foundCategory = item;
      }
    });
    return foundCategory;
  }
}
