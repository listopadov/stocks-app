import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, of, throwError} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

import {GainerDetails} from '../../../shared/models/gainer-details';

@Injectable({
  providedIn: 'root'
})
export class GainersDetailsService {

  constructor(private httpClient: HttpClient) {
  }

  getGainerDetailsData(symbol): Observable<GainerDetails> {
    const url1 = this.httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`);
    const url2 = this.httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`);
    const url3 = this.httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/logo`);

    return forkJoin([url1, url2, url3])
      .pipe(
         catchError(error => {
          return throwError(error);
        }),
        map(data => {
          return new GainerDetails(
            data[0]['symbol'],
            data[0]['companyName'],
            data[0]['description'],
            data[0]['sector'],
            data[0]['industry'],
            data[0]['website'],
            data[1]['latestVolume'],
            data[1]['week52High'],
            data[1]['week52Low'],
            data[1]['open'],
            data[1]['previousClose'],
            data[1]['avgTotalVolume'],
            data[1]['marketCap'],
            data[1]['latestSource'],
            data[1]['latestUpdate'],
            data[1]['latestPrice'],
            data[1]['change'],
            data[1]['changePercent'],
            data[2]['url'],
          );
        })
      );
  }
}
