import {Component, AfterViewInit} from '@angular/core';
import { WindowRef } from '../shared/windowWrapper';

@Component({
  templateUrl: '500.html'
})

export class ServerErrorComponent implements AfterViewInit{
  constructor(private windowElement: WindowRef) {

  };
  ngAfterViewInit(){
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }
}
