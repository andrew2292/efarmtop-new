import { Component , AfterViewInit} from '@angular/core';
import { WindowRef } from '../shared/windowWrapper';
import  {mainDataService} from '../shared/mainData.injectable';

@Component({
  selector: 'sticky-footer',
  templateUrl: '../sticky-footer/footer.html'
})
export class FooterComponent implements AfterViewInit{
  footerElement: any = null;
  content: any = null;
  calculatePadding: any = function(){
    if(this && this.mainData){
      this.footerElement = document.getElementById(this.mainData.footerID).firstChild.parentElement;
      this.content = document.getElementById(this.mainData.mainContentWrapper);
      let heightOfContent = this.content.offsetTop + this.content.offsetHeight;
      let footerHeight = this.footerElement.offsetHeight;
      let windowHeight = this.windowElement.nativeWindow.innerHeight;
      if(heightOfContent + footerHeight > windowHeight)
        this.footerElement.style.marginTop = '30px';
      else
        this.footerElement.style.marginTop = (windowHeight - heightOfContent - footerHeight + 20) + 'px';
    }
  };

  constructor(private windowElement: WindowRef, public mainData: mainDataService) {

  };

  ngAfterViewInit(){
    let componentThis = this;
    let continuousRefresh = function () {
      componentThis.calculatePadding();
      setTimeout(continuousRefresh, 300);
    };
    this.windowElement.nativeWindow.addEventListener('resize', componentThis.calculatePadding, false);
    document.addEventListener('DOMContentLoaded', function(){
      continuousRefresh();
    }, false);
  }

}
