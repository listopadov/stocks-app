import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GainersComponent} from '../components/gainers/gainers.component';
import {GainersDetailsComponent} from '../components/gainers/gainers-details/gainers-details.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: GainersComponent},
  {path: 'company/:symbol', component: GainersDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {

}
