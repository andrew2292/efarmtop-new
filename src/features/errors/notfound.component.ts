import {Component, AfterViewInit} from '@angular/core';
import { WindowRef } from '../shared/windowWrapper';

@Component({
  templateUrl: '404.html'
})

export class NotFoundComponent implements AfterViewInit{
  constructor(private windowElement: WindowRef) {

  };
  ngAfterViewInit(){
    this.windowElement.nativeWindow.mixpanel.track( "Page Viewed", { "page": '/404' } );
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }
}
