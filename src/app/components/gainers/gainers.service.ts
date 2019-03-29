import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GainerPromo} from '../../shared/models/gainer-promo';

@Injectable({
  providedIn: 'root'
})
export class GainersService {
  newArray: Array<GainerPromo>;

  constructor(private httpClient: HttpClient) {
  }

  getGainerCompaniesData(): Observable<any> {
    return this.httpClient.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
      .pipe(
        // todo Andrey: any[] is a bad interface, it'll be better, if you create correct one
        // this will allow other developers to understand, what data structure is expected here
        map((data: any[]) => {
          const dataArray = data.slice(0, 5);

          return this.newArray = dataArray.map((item) => {
            return new GainerPromo(
              item['symbol'],
              item['companyName'],
              item['change'],
              item['latestPrice']
            );
          });
        })
      );
  }

  getGainerCompaniesArray() {
    return this.newArray.slice();
  }
}
