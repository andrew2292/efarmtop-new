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
    this.windowElement.nativeWindow.mixpanel.track( "Page Viewed", { "page": '/contact' } );
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }
}
