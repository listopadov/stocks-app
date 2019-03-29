import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchComponent} from './shared/search/search.component';
import {GainersComponent} from './components/gainers/gainers.component';
import {GainersDetailsComponent} from './components/gainers/gainers-details/gainers-details.component';
import {AppRouterModule} from './routing/app-router.module';
import {GainerCardComponent} from './components/gainers/gainer-card/gainer-card.component';
import {GainersService} from './components/gainers/gainers.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GainersDetailsService} from './components/gainers/gainers-details/gainers-details.service';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {GainerDetailsGuard} from './guards/gainerDetails.guard';
import {GainerInterceptor} from './shared/interceptors/gainer.interceptor';
import {ShortenPipe} from './shared/pipes/shorten.pipe';
import { ThousandsSeparatorPipe } from './shared/pipes/thousands-separator.pipe';
import { PrettifyNumberPipe } from './shared/pipes/prettify-number.pipe';
@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    GainersComponent,
    GainersDetailsComponent,
    GainerCardComponent,
    PageNotFoundComponent,
    ShortenPipe,
    ThousandsSeparatorPipe,
    PrettifyNumberPipe
  ],
  providers: [
    GainersService,
    GainersDetailsService,
    GainerDetailsGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GainerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
