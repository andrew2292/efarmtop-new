import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { AppComponent } from './app.component';
import { AboutComponent } from '../features/about/about.component';
import { ContactComponent } from '../features/contact/contact.component';
import { GalleryComponent } from '../features/gallery/gallery.component';
import { HomeComponent } from '../features/home/home.component';
import { ProductsComponent } from '../features/products/products.component';
import { ProductComponent } from '../features/product/product.component';

import { Angulartics2Module } from 'angulartics2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ParallaxScrollModule,
    Angulartics2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
