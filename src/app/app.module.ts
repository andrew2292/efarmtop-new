import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from '../features/sticky-footer/footer.component';
import {ContactComponent} from "../features/contact/contact.component";
import {AboutComponent} from "../features/about/about.component";
import {CategoriesComponent} from "../features/categories/categories.component";
import {CVComponent} from "../features/cv/cv.component";
import {NotFoundComponent} from "../features/errors/notfound.component";
import {ForbiddenComponent} from "../features/errors/forbidden.component";
import {ServerErrorComponent} from "../features/errors/serverError.component";
import {HomeComponent} from "../features/home/home.component";
import {PromosComponent} from "../features/latest/promos.component";
import {PartnersComponent} from "../features/partners/partners.component";
import {ProductComponent} from "../features/product/product.component";
import {NgsRevealModule} from 'ng-scrollreveal';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper'; //or for angular-cli the path will be ../../node_modules/angular2-useful-swiper
import {OrderByPipe} from '../features/shared/orderBy.component';
import {mainDataService} from '../features/shared/mainData.injectable';
import {FilterService} from '../features/shared/filterService';
import { WindowRef } from '../features/shared/windowWrapper';
import { TruncateModule, TRUNCATE_PIPES } from 'ng2-truncate';
import { RouterModule, Routes } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { AppHttpInterceptor } from 'src/features/shared/httpInterceptor.component';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { MaterializeComponentModule } from './materialize.module';

const appRoutes: Routes = [
  { path: '404',  component: NotFoundComponent },
  { path: '403',  component: ForbiddenComponent },
  { path: '500',  component: ServerErrorComponent },
  { path: 'acasa',  component: HomeComponent },
  { path: '',
    redirectTo: '/acasa',
    pathMatch: 'full'
  },
  { path: 'categorie/:id',  component: CategoriesComponent},
  { path: 'produs/:categoryID/:id',  component: ProductComponent},
  { path: 'despre',  component: AboutComponent },
  { path: 'parteneri',  component: PartnersComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'promotii',  component: PromosComponent },
  { path: 'cv',  component: CVComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    CategoriesComponent,
    CVComponent,
    NotFoundComponent,
    ForbiddenComponent,
    ServerErrorComponent,
    HomeComponent,
    PromosComponent,
    PartnersComponent,
    ProductComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    TruncateModule,
    FormsModule,
    NgsRevealModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Angulartics2Module.forRoot(),
    Angular2UsefulSwiperModule,
    GalleryModule.forRoot(),
    MaterializeComponentModule.forRoot()
    // other imports here
  ],
  providers: [mainDataService, WindowRef, { provide: FilterService, useClass: FilterService },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
