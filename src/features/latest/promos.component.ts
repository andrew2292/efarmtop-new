import {Component, AfterViewInit} from '@angular/core';
import {mainDataService} from '../shared/mainData.injectable';
import { WindowRef } from '../shared/windowWrapper';

@Component({
  templateUrl: 'latest.html'
})

export class PromosComponent implements AfterViewInit{
  latestProducts: any = [];
  constructor(private windowElement: WindowRef, private sharedData: mainDataService) {

  };
  ngAfterViewInit(){
    setTimeout(_=> this.latestProducts = this.sharedData.latestProductsPromos);
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }
}
