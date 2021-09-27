import {Component, AfterViewInit} from '@angular/core';
import {WindowRef} from '../shared/windowWrapper';
import {mainDataService} from '../shared/mainData.injectable';

@Component({
  templateUrl: 'partners.html'
})

export class PartnersComponent implements AfterViewInit{

    constructor (private winRef: WindowRef, private sharedData: mainDataService){

    }

    partnersPartOne: any = [
      {
        image: 'assets/img/partners/3m.png',
        website: null
      },
      {
        image: 'assets/img/partners/biofarm.png',
        website: null
      },
      {
        image: 'assets/img/partners/hartmann.png',
        website: null
      }
    ];
    partnersPartTwo: any = [
      {
        image: 'assets/img/partners/medimpact.png',
        website: null
      },
      {
        image: 'assets/img/partners/rovalmed.png',
        website: 'http://www.rovalmed.ro/'
      },
      {
        image: 'assets/img/partners/tis.png',
        website: null
      }
      ];
    partnersPartThree: any = [
      {
        image: 'assets/img/partners/omegaPharma.png',
        website: null
      },
      {
        image: 'http://www.prima-info.ro/prima.png',
        website: 'http://prima-info.ro/'
      },
      {
        image: 'assets/img/partners/drHappy.png',
        website: null
      }

    ];

  goToWebsite(url) {
    if(url){
      this.winRef.nativeWindow.open(url, '_blank');
    }
  };

  ngAfterViewInit(){
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }

}
