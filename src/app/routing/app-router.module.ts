import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GainersComponent} from '../components/gainers/gainers.component';
import {GainersDetailsComponent} from '../components/gainers/gainers-details/gainers-details.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {GainerDetailsGuard} from '../guards/gainerDetails.guard';

const appRoutes: Routes = [
  {path: '', component: GainersComponent},
  {path: 'company/:symbol', canActivate: [GainerDetailsGuard], component: GainersDetailsComponent},
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
