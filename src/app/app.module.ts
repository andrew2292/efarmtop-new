import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

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
    BrowserAnimationsModule,
    TruncateModule,
    FormsModule,
    NgsRevealModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Angulartics2Module.forRoot(),
    Angular2UsefulSwiperModule,
    GalleryModule.forRoot(),
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [mainDataService, WindowRef, { provide: FilterService, useClass: FilterService },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
