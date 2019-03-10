import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GainersDetailsService} from '../components/gainers/gainers-details/gainers-details.service';

@Injectable()
export class GainerDetailsGuard implements CanActivate {
  constructor(private router: Router,
              private gainersDetailsService: GainersDetailsService) {
  }

  /**
   * Есть несколько идей
   * 1. Отправляем запрос и проверяем, если вернётся 404 то редиректим на страницу not-found
   * 2. Перед переходом на страницу с деталями проверяем, есть ли symbol в массиве или нет, если нет - редиректим на /not-found
   * */
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.gainersDetailsService.getGainerDescription(route.params['symbol'])
      .subscribe(
        () => {
        },
        (error) => {
          if (error.status === 404) {
            this.router.navigate(['/']);
            return false;
          }
        },
      );

    return true;
  }
}
