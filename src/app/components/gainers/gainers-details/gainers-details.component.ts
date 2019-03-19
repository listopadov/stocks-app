import {Component, OnInit} from '@angular/core';
import {GainersDetailsService} from './gainers-details.service';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GainersService} from '../gainers.service';
import {GainerDetails} from '../../../shared/models/gainer-details';

@Component({
  selector: 'app-gainers-details',
  templateUrl: './gainers-details.component.html',
  styleUrls: ['./gainers-details.component.scss']
})
export class GainersDetailsComponent implements OnInit {
  gainerDescription: GainerDetails;

  isSendingDescription = true;

  logoImageCompany: Observable<any>;

  constructor(private gainersDetailsService: GainersDetailsService,
              private gainersService: GainersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const symbolCompany = this.route.snapshot.params['symbol'];

    this.gainersDetailsService.getGainerDetailsData(symbolCompany)
      .pipe(
        finalize(
          () => {
            this.isSendingDescription = false;
          }
        )
      )
      .subscribe(
        (data) => {
          this.gainerDescription = data;
        },
        (error) => {
          this.router.navigate(['/404']);
        },
      );
  }

}
