import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GainerProfileDescription} from '../../../shared/models/gainer-profile-description';
import {GainerProfileQuote} from '../../../shared/models/gainer-profile-quote';

@Injectable({
  providedIn: 'root'
})
export class GainersDetailsService {

  constructor(private httpClient: HttpClient) {
  }

  getGainerDescription(symbol: string): Observable<GainerProfileDescription> {
    return this.httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
      .pipe(
        map(
          // todo rev: RV-C1 16.03.2019 09:17
          // todo Andrey: is Response a correct json data interface?
          // todo there is no import statement for it
          (data: Response) => {
            // TODO need check data
            return new GainerProfileDescription(
              data['symbol'],
              data['companyName'],
              data['description'],
              data['sector'],
              data['industry'],
              data['website']
            );
          }
        )
      );
  }

  // todo rev: RV-C1 16.03.2019 09:22
  // todo Andrey: It's better to avoid using any data interface at all
  // todo Observable<any> -> Observable<string>
  getLogoCompany(symbol: string): Observable<any> {
    return this.httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/logo`)
      .pipe(
        map(
          // todo rev: RV-C1 16.03.2019 09:17
          // todo Andrey: is Response a correct json data interface?
          // todo there is no import statement for it
          (response: Response) => {
            return response.url;
          }
        )
      );
  }

  getSpecificQuote(symbol: string): Observable<GainerProfileQuote> {
    return this.httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
      .pipe(
        map(
          // todo rev: RV-C1 16.03.2019 09:17
          // todo Andrey: is Response a correct json data interface?
          // todo there is no import statement for it
          (response: Response) => {
            return new GainerProfileQuote(
              response['latestVolume'],
              response['week52High'],
              response['week52Low'],
              response['open'],
              response['previousClose'],
              response['avgTotalVolume'],
              response['marketCap'],
              response['latestSource'],
              response['latestUpdate'],
              response['latestPrice'],
              response['change'],
              response['changePercent']
            );
          }
        )
      );
  }
}
