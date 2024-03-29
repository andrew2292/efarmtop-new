import { Component , AfterViewInit} from '@angular/core';
import { mainDataService } from '../features/shared/mainData.injectable';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  categories: any = [];
  constructor(public sharedData: mainDataService, 
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();
  };
  ngAfterViewInit() {
    setTimeout(_ => this.categories = this.sharedData.categories);
    // this.sharedData.currentState = this.router.stateService.$current.name;
  }

}
