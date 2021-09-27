import {Component, AfterViewInit} from '@angular/core';
import {mainDataService} from '../shared/mainData.injectable';
import { WindowRef } from '../shared/windowWrapper';

@Component({
  templateUrl: 'contact.html'
})

export class ContactComponent implements AfterViewInit{
  constructor(private windowElement: WindowRef, private sharedData: mainDataService) {

  };
  ngAfterViewInit(){
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }
}
