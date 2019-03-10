import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GainerPromo} from '../../shared/models/gainer-promo';

@Injectable({
  providedIn: 'root'
})
export class GainersService {

  constructor(private httpClient: HttpClient) {
  }

  getGainerCompaniesData(): Observable<any> {
    return this.httpClient.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
      .pipe(
        map((data: any[]) => {
          const dataArray = data.slice();
          // TODO maybe I can store data with Rxjs array
          const newArray: Array<GainerPromo> = [];

          // TODO can not find in API queryParams for get only 5 objects
          for (let i = 0; i < 5; i++) {
            if (!dataArray[i]) {
              break;
            }

            newArray.push(new GainerPromo(dataArray[i]['symbol'], dataArray[i]['companyName'],
              dataArray[i]['change'], dataArray[i]['latestPrice']));
          }

          return newArray;
        })
      );
  }
}
