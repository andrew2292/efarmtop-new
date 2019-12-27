import {Component, Input, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {mainDataService} from '../shared/mainData.injectable';
import { ActivatedRoute } from '@angular/router';
import {FilterService} from '../shared/filterService';
import { WindowRef } from '../shared/windowWrapper';

@Component({
  templateUrl: 'categories.html'
})

export class CategoriesComponent implements OnInit, OnDestroy, AfterViewInit{
  categoryID: number;
  category: any;
  private sub: any;

  constructor(private windowElement: WindowRef, private filterSvc: FilterService, private sharedData: mainDataService, private route: ActivatedRoute) {

  };
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryID = + params['id'];
      this.category = this.filterSvc.findItemById(this.sharedData.categories, this.categoryID);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  ngAfterViewInit(){
    this.windowElement.nativeWindow.mixpanel.track( "Page Viewed", { "page": '/categorie/' +  this.categoryID} );
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }
}
