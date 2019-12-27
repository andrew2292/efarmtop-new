import {Component, AfterViewInit} from '@angular/core';
import {mainDataService} from '../shared/mainData.injectable';
import { WindowRef } from '../shared/windowWrapper';
import { SwiperOptions } from 'swiper';

@Component({
  templateUrl: 'home.html'
})

export class HomeComponent implements AfterViewInit{
  mostWantedProductsShuffled: any = [];
  latestProducts: any = [];

  constructor(private windowElement: WindowRef, private sharedData: mainDataService) {

  };

  config: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    speed: 500,
    autoplay: {
      delay: 5000,
    }
  };


  carouselImages : any = [
    'assets/img/pillOne.jpg',
    'assets/img/pillTwo.jpg',
    'assets/img/pillThree.jpg'
  ];

  ngAfterViewInit(){
    let data = [];
    this.windowElement.nativeWindow.mixpanel.track( "Page Viewed", { "page": '/acasa' } );
    this.sharedData.categories.forEach(function(item) {
      let result = item.products[Math.floor(Math.random() * item.products.length)];
      result.rank =  0.5 - Math.random();
      data.push(result);
    });
    // this.sharedData.currentState = this.router.stateService.$current.name;
    this.latestProducts = this.sharedData.latestProducts;
    this.mostWantedProductsShuffled = data;
  }
}
