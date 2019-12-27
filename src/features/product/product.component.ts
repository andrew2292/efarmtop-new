import {Component, Input, AfterContentInit, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {FilterService} from '../shared/filterService';
import { ActivatedRoute } from '@angular/router';
import {mainDataService} from '../shared/mainData.injectable';
import { WindowRef } from '../shared/windowWrapper';
import { Image } from '@ks89/angular-modal-gallery';
@Component({
  templateUrl: 'product.html'
})

export class ProductComponent implements AfterContentInit, OnInit, OnDestroy, AfterViewInit{
  category: any;
  productID: number;
  categoryID: number;
  private sub: any;
  images: any = [];
  product: any;

  constructor(private windowElement: WindowRef, private filterSvc: FilterService, private sharedData: mainDataService, private route: ActivatedRoute){
  }

  ngAfterContentInit(){
    this.category = this.filterSvc.findItemById(this.sharedData.categories, this.categoryID);
    this.product = this.filterSvc.findItemById(this.category.products, this.productID);
    this.product.images.forEach((image, index) => {
      this.images.push(
        new Image(
          index, 
          {
            ...image
          }
        )
      )
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.productID = + params['id']; // (+) converts string 'id' to a number
      this.categoryID = + params['categoryID'];
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(){
    this.windowElement.nativeWindow.mixpanel.track( "Page Viewed", { "page": '/produs/' +  this.categoryID + '/' + this.productID} );
  }
}
