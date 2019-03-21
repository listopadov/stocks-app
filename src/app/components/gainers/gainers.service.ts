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
        // todo rev: RV-C1 16.03.2019 09:05
        // todo Andrey: any[] is a bad interface, it'll be better, if you create correct one
        // this will allow other developers to understand, what data structure is expected here
        map((data: any[]) => {
          // todo rev: RV-C1 16.03.2019 09:12
          // todo Andrey: data.slice(0, 4) should return copy of first 5 elements in data[]
          const dataArray = data.slice();
          this.newArray = [];

          // TODO can not find in API queryParams for get only 5 objects
          // todo rev: RV-C1 16.03.2019 09:13
          // todo Andrey: it can be replaced with something like this:
          // todo return dataArray.map((data) => createGainerPromo(data));
          for (let i = 0; i < 5; i++) {
            if (!dataArray[i]) {
              break;
            }

            this.newArray.push(new GainerPromo(dataArray[i]['symbol'], dataArray[i]['companyName'],
              dataArray[i]['change'], dataArray[i]['latestPrice']));
          }

          return this.newArray;
        })
      );
  }

  getGainerCompaniesArray() {
    return this.newArray.slice();
  }
}
