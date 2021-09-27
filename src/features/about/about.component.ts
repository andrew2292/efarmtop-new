import {Component, AfterViewInit} from '@angular/core';
import {mainDataService} from '../shared/mainData.injectable';
import { WindowRef } from '../shared/windowWrapper';

@Component({
    templateUrl: 'about.html'
})

export class AboutComponent implements AfterViewInit{
  constructor(private windowElement: WindowRef, private sharedData: mainDataService) {

  };

  ngAfterViewInit(){
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }
}
