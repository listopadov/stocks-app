import {Component, OnInit} from '@angular/core';
import {GainerPromo} from '../../shared/models/gainer-promo';
import {GainersService} from './gainers.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.scss']
})
export class GainersComponent implements OnInit {
  gainerCompanies: Array<GainerPromo>;
  isSending = true;

  // todo rev: RV-C1 16.03.2019 09:15
  // todo Andrey: let's fix grammar mistake :) gainerServeice -> gainerService
  constructor(private gainerServeice: GainersService) {
  }

  ngOnInit() {
    this.gainerServeice.getGainerCompaniesData()
      .pipe(
        finalize(() => {
          this.isSending = false;
        })
      )
      .subscribe(
        (data) => {
          this.gainerCompanies = data;
        },
        // todo rev: RV-C1 16.03.2019 09:15
        // todo Andrey: it's better not to ignore errors
        // todo and do at least something (console.log / alert)
        (error) => {}
      );
  }

}
