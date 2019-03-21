import {Component, OnInit} from '@angular/core';
import {GainerProfileDescription} from '../../../shared/models/gainer-profile-description';
import {GainersDetailsService} from './gainers-details.service';
import {ActivatedRoute} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GainerProfileQuote} from '../../../shared/models/gainer-profile-quote';

@Component({
  selector: 'app-gainers-details',
  templateUrl: './gainers-details.component.html',
  styleUrls: ['./gainers-details.component.scss']
})
export class GainersDetailsComponent implements OnInit {
  gainerDescription: GainerProfileDescription;
  gainerSpecificQuote: GainerProfileQuote;

  isSendingDescription = true;
  isSendingQuote = true;

  logoImageCompany: Observable<any>;

  constructor(private gainersDetailsService: GainersDetailsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const symbolCompany = this.route.snapshot.params['symbol'];

    this.gainersDetailsService.getGainerDescription(symbolCompany)
      .pipe(
        finalize(() => {
          this.isSendingDescription = false;
        })
      )
      .subscribe(
        (data) => {
          this.gainerDescription = data;
        },
        // todo rev: RV-C1 16.03.2019 09:19
        // todo Andrey: error handler should be added here
        () => {
        }
      );

    this.gainersDetailsService.getSpecificQuote(symbolCompany)
      .pipe(
        finalize(() => {
          this.isSendingQuote = false;
        })
      )
      .subscribe(
        (data) => {
          this.gainerSpecificQuote = data;
        },
        // todo rev: RV-C1 16.03.2019 09:19
        // todo Andrey: error handler should be added here
        () => {
        },
      );

    this.logoImageCompany = this.gainersDetailsService.getLogoCompany(symbolCompany);
  }

}
