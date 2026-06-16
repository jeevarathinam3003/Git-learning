import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers,reducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: 'horizontal',
//   slidesPerView: 'auto'
// };
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CookieService } from 'ngx-cookie-service';
import { RequestInterceptor } from './providers/interceptor/jwt-interceptor.interceptor';
import { AWSUploadService } from './providers/services/awsupload.service';
import { CommonSandbox } from './common/common.sandbox';
import { CommonService } from './common/common.service';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    // HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]), // Initialize effects without specifying any root effects
    ToastrModule.forRoot({
      timeOut: 3000,
      easing: 'ease-in',
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }),
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    CookieService,
    provideHttpClient(), 
    AWSUploadService,
    // provideClientHydration(),
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG
    // },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }, provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }

    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
