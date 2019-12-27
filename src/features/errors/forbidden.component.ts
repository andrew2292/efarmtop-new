import {Component, AfterViewInit} from '@angular/core';
import { WindowRef } from '../shared/windowWrapper';

@Component({
  templateUrl: '403.html'
})

export class ForbiddenComponent implements AfterViewInit{
  constructor(private windowElement: WindowRef) {

  };
  ngAfterViewInit(){
    this.windowElement.nativeWindow.mixpanel.track( "Page Viewed", { "page": '/403' } );
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }
}
